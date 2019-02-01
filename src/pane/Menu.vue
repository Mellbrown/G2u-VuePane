<template>
  <div class="flex grow h-left bg-secondary">
    <div class="flex bg-dark" :style="{width: '60px'}">
      <div class="btn p-2 m-1 text-white"
        :style="{fontWeight:'bold'}"
        :class="current === 'MainMenu' ? ['bg-secondary'] : []"
        @click="toggleMenu('MainMenu')">
        G2u</div>
      <div class="btn p-2 m-1"
        :class="nobar ? ['bg-secondary'] : []"
        @click="pane_nobar(!nobar)">
        <icon icon="adjust" size="lg" color="white"/>
      </div>
      <div class="flex grow v-stack">
        <div class="btn p-2 m-1"
          :class="current === 'setting' ? ['bg-secondary'] : []"
          @click="toggleMenu('setting')">
          <icon icon="cog" size="lg" color="white" />
        </div>
      </div>
    </div>
    <component :is="current" v-if="current" @request-close="requestClose"/>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MainMenu from '@/menu/MainMenu.vue'

export default {
  components: { MainMenu },
  props: ['_id', 'type', 'param', 'parent'],
  data () {
    return {
      current: '',
      size: null
    }
  },
  computed: {
    ...mapState({
      nobar: state => state.syspane.nobar || false
    })
  },
  methods: {
    toggleMenu (menu) {
      if (this.current === menu) {
        this.current = null
      } else this.current = menu
    },
    requestClose () {
      this.current = null
    },
    ...mapMutations(['pane_grab', 'pane_resize', 'pane_nobar'])
  },
  watch: {
    current (_new, _old) {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      if (!_new && !!_old) { // 사라졌다
        this.size = context.grab.param.width
        this.pane_resize({ context, size: { width: 'auto', resize: false } })
      } else if (!!_new && !_old) { // 생겼다
        this.pane_resize({ context, size: { width: this.size || '300px', resize: true } })
      }
    }
  }
}
</script>

<style>

</style>
