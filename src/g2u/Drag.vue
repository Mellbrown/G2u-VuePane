<template>
  <div class="g2u-drag">
    <component :is="dragcomp" v-if="dragcomp" />
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      bus: new Vue(),
      dragitem: null,
      dragcomp: null,
      mousemove: null,
      mouseup: null
    }
  },
  mounted () {
    this.$store.state.dragbus = this.bus
    this.bus.$on('dragStart', option => {
      var { dragitem } = option
      this.dragitem = dragitem
      this.mousemove = window.addEventListener('mousemove', this.windowMouseMove)
      this.mouseup = window.addEventListener('mouseup', this.windowMouseUp)
    })
  },
  methods: {
    windowMouseMove (e) {
      var { clientX, clientY } = e
      console.log(clientX, clientY)
    },
    windowMouseUp (e) {
      this.dragitem = null
      window.removeEventListener('mousemove', this.mousemove)
      window.removeEventListener('mouseup', this.mouseup)
    }
  },
  computed: {
    loader () {
      if (!this.dragitem) {
        return () => import(`@/drag/default`)
      }
      return () => import(`@/drag/${this.dragitem}`)
    }
  },
  watch: {
    contentType () {
      this.loader()
        .then(() => {
          this.dragcomp = () => this.loader()
        })
        .catch(() => {
          this.dragcomp = () => import(`@/drag/default`)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.g2u-drag {
  position: absolute;
}
</style>
