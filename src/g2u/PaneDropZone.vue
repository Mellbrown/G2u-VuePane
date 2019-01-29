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

      var direct = this.parent.param.direction
      var over = this.over
      if (direct !== 'vertical' && (over === 'left' || over === 'right')) {
        context.grab = this.parent
        this.pane_nth({ context, _id: this._id })
        context.openAt = context.nth + (this.over === 'right' ? 1 : 0)
        this.pane_open({ context, type: 'pane', param: {} }) // pane 열기
        context.grab = context.open
        this.pane_append({ context, pane: drop })
      } else if (direct !== 'vertical' && (over === 'top' || over === 'bottom')) {
        context.grab = this.parent
        this.pane_nth({ context, _id: this._id })
        context.openAt = context.nth // current position
        this.pane_open({ context, type: 'panes', param: { direction: 'vertical' } }) // ver panes
        this.pane_grab({ context, _id: this._id }) // select close target
        this.pane_close(context)
        let pop = context.grab
        context.grab = context.open
        if (pop.child.length !== 0) this.pane_append({ context, pane: pop }) // 기존거 복구
        context.openAt = over === 'top' ? 0 : 1
        this.pane_open({ context, type: 'pane', param: {} }) // pane 열기
        context.grab = context.open
        context.openAt = null
        this.pane_append({ context, pane: drop }) // drop 복구
      } else if (direct === 'vertical' && (over === 'top' || over === 'bottom')) {
        context.grab = this.parent
        this.pane_nth({ context, _id: this._id })
        context.openAt = context.nth + (this.over === 'bottom' ? 1 : 0)
        this.pane_open({ context, type: 'pane', param: {} })
        context.grab = context.open
        this.pane_append({ context, pane: drop })
      } else if (direct === 'vertical' && (over === 'left' || over === 'right')) {
        context.grab = this.parent
        this.pane_nth({ context, _id: this._id })
        context.openAt = context.nth // current position
        this.pane_open({ context, type: 'panes', param: { direction: 'horizontal' } }) // ver panes
        this.pane_grab({ context, _id: this._id }) // select close target
        this.pane_close(context)
        let pop = context.grab
        context.grab = context.open
        if (pop.child.length !== 0) this.pane_append({ context, pane: pop }) // 기존거 복구
        context.openAt = over === 'left' ? 0 : 1
        this.pane_open({ context, type: 'pane', param: {} }) // pane 열기
        context.grab = context.open
        context.openAt = null
        this.pane_append({ context, pane: drop }) // drop 복구
      } else if (over === 'center') {
        this.pane_grab({ context, _id: this._id })
        this.pane_append({ context, pane: drop })
      }
    },
    ...mapMutations([
      'pane_open',
      'pane_append',
      'pane_close',
      'pane_nth',
      'pane_grab',
      'drag_end'
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
