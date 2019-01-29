<template>
  <div class="g2u-tab flex grow h-right point px-2 py-1"
    :class="clTabActivatedColor"
    @click.left="activateTab"
    @click.middle="closeTab"
    @mousedown="ismousedown = true"
    @mouseup="ismousedown = false"
    @mouseleave="ismousedown = false"
    @mousemove="onmousemove">
    <button class="btn mr-1 p-0"
      @click.stop="closeTab">
      <icon icon="times"/>
    </button>
    <small class="tab-title in-block grow mr-2">{{param.title}}</small>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child', 'activated'],
  data () {
    return {
      ismousedown: false
    }
  },
  mounted () {
    this.activateTab()
  },
  methods: {
    onmousemove (e) {
      if (this.ismousedown) {
        this.drag_start({
          type: 'DragTab',
          startX: e.clientX,
          startY: e.clientY,
          param: {
            title: this.param.title
          },
          drop: this._id
        })
      }
    },
    activateTab () {
      this.$emit('onactivate', this._id)
    },
    closeTab (_id) {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      this.pane_close(context)
    },
    ...mapMutations([
      'pane_grab',
      'pane_close',
      'drag_start'
    ])
  },
  computed: {
    clTabActivatedColor () {
      return this.activated ? ['bg-light'] : ['bg-dark', 'text-light']
    }
  }
}
</script>

<style lang="scss" scoped>
.g2u-tab {
  max-width: 150px;
  min-width: 0px;
  overflow: hidden;
  .tab-title {
    min-width: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
