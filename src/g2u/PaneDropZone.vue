<template>
  <div class="frame flex" v-show="sysdrag">
    <div class="flex grow" :class="over === 'center' ? 'bg-secondary opacity-50' : ''"/>
    <div class="frame flex h-left">
      <div class="w-50" :class="over === 'left' ? 'bg-secondary opacity-50' : ''"/>
      <div class="w-50" :class="over === 'right' ? 'bg-secondary opacity-50' : ''"/>
    </div>
    <div class="frame flex">
      <div class="h-50" :class="over === 'top' ? 'bg-secondary opacity-50' : ''"/>
      <div class="h-50" :class="over === 'bottom' ? 'bg-secondary opacity-50' : ''"/>
    </div>
    <div class="frame flex h-left" @mouseup.stop="onmouseup" @mouseleave="over = null">
      <div class="w-25" @mouseenter="over = 'left'"/>
      <div class="flex grow ">
        <div class="h-25" @mouseenter="over = 'top'" />
        <div class="grow" @mouseenter="over = 'center'" />
        <div class="h-25" @mouseenter="over = 'bottom'" />
      </div>
      <div class="w-25" @mouseenter="over = 'right'"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: ['_id', 'parent'],
  data () {
    return {
      over: null
    }
  },
  methods: {
    onmouseup (e) {
      var context = {}
      this.drag_end(context) // drop => tab._id, tab.parent, open.type, open.param
      this.pane_grab({ context, _id: context.drop })
      this.pane_close(context) // drop tab close
      var drop = context.grab
      this.pane_grab({ context, _id: this._id })

      if (this.over === 'center') {
        this.pane_append({ context, pane: drop })
      } else {
        this.pane_split({ context, splitTo: this.over, drop })
      }
    },
    ...mapMutations([
      'pane_open',
      'pane_append',
      'pane_close',
      'pane_nth',
      'pane_grab',
      'drag_end',
      'pane_split'
    ])
  },
  computed: {
    ...mapState(['sysdrag'])
  }
}
</script>

<style lang="scss" scoped>
.opacity-50 { opacity: .5;}
</style>
