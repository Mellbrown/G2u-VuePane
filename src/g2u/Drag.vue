<template>
  <div class="g2u-drag absolute" :style="styPosition">
    <d-comp v-if="sysdrag"
      path="drag"
      :type="sysdrag.type"
      :param="sysdrag.param"
      :_id="null"
      :parent="null"
      :wrap_content="true"/>
  </div>
</template>

<script>
import DComp from '@/g2u/DComp'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      clientPos: null
    }
  },
  mounted () {
    this.drag_init()
  },
  watch: {
    'sysdrag.type' (_new, _old) {
      if (!!_new && !_old) {
        window.addEventListener('mouseup', this.windowonmouseup)
        window.addEventListener('mousemove', this.windowonmousemove)
        this.clientPos = { x: this.sysdrag.startX, y: this.sysdrag.startY }
      }
    }
  },
  methods: {
    windowonmouseup (e) {
      window.removeEventListener('mouseup', this.windowonmouseup)
      window.removeEventListener('mousemove', this.windowonmousemove)
      this.clientPos = null
      this.drag_cancle()
    },
    windowonmousemove (e) {
      this.clientPos = { x: e.clientX, y: e.clientY }
    },
    ...mapMutations([
      'drag_init',
      'drag_cancle'
    ])
  },
  computed: {
    styPosition () {
      return {
        top: this.clientPos && this.clientPos.y + 'px',
        left: this.clientPos && this.clientPos.x + 'px'
      }
    },
    ...mapState(['sysdrag'])
  },
  components: { DComp }
}
</script>

<style lang="scss" scoped>
.g2u-drag {
  position: absolute;
}
</style>
