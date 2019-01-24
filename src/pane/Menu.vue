<template>
  <div class="df fg fb bg-secondary">
    <div class="bg-dark df fc" :style="{width: '60px'}">
      <div class="btn p-2 m-1 text-white"
        :style="{fontWeight:'bold'}"
        :class="current === 'MainMenu' ? ['bg-secondary'] : []"
        @click="toggleMenu('MainMenu')">
        G2u</div>
      <div class="btn p-2 m-1"
        :class="current === 'other' ? ['bg-secondary'] : []"
        @click="toggleMenu('other')">
        <icon icon="adjust" size="lg" color="white"/>
      </div>
      <div class="df fg fb fd">
        <div class="btn p-2 m-1"
          :class="current === 'setting' ? ['bg-secondary'] : []"
          @click="toggleMenu('setting')">
          <icon icon="cog" size="lg" color="white" />
        </div>
      </div>
    </div>
    <component :is="current" v-if="current" />
  </div>
</template>

<script>
import Vue from 'vue'
import MainMenu from '../menu/MainMenu.vue'

export default {
  components: { MainMenu },
  props: {
    info: { type: Object, default: () => {} },
    bus: { type: Vue, default: () => new Vue() }
  },
  data () {
    return {
      current: ''
    }
  },
  methods: {
    toggleMenu (menu) {
      if( this.current === menu ) {
        this.current = null
      } else this.current = menu
    }
  },
  watch: {
    current (_new, _old) {
      if (!_new && !!_old ) {// 사라졌다
        this.bus.$emit('resize', { key: this.info.key , size:{width: 'auto'}})
      } else if (!!_new && !_old){ // 생겼다
        this.bus.$emit('resize', { key: this.info.key , size:{width: '300px'}})
      }
    }
  }
}
</script>

<style>

</style>
