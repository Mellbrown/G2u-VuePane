<template>
  <div class="flex grow border border-dark">
    <div class="g2u-tabs flex h-left bg-secondary shadow" v-show="nobar">
      <tab v-for="tab in child" :key="tab._id"
        :_id="tab._id"
        :type="tab.type"
        :param="tab.param"
        :child="tab.child"
        :parent="tab.parent"
        :activated="param.content_id === tab._id"
        @onactivate="onTabSelected"/>
      <div class="flex grow h-right">
        <button class="btn p-1 mr-2">
          <icon icon="ellipsis-h"/>
        </button>
      </div>
    </div>
    <div class="flex grow relative">
      <d-comp
        path="pane"
        v-if="content"
        :_id="content._id"
        :type="content.type"
        :param="content.param"
        :parent="content.parent"/>
      <pane-drop-zone :_id="_id" :parent="parent"/>
    </div>
  </div>
</template>

<script>
import Tab from '@/g2u/Tab.vue'
import DComp from '@/g2u/DComp.vue'
import PaneDropZone from '@/g2u/PaneDropZone.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child'],
  mounted () {
    this.activate()
  },
  beforeDestroy () {
    this.pane_deactivate(this._id)
  },
  methods: {
    onTabSelected (_id) {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      this.pane_param({ context, param: { content_id: _id } })
      this.activate()
    },
    activate () {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      this.pane_activate(context)
    },
    ...mapMutations([
      'pane_grab',
      'pane_param',
      'pane_activate',
      'pane_deactivate',
      'pane_close'
    ])
  },
  watch: {
    child () {
      if (!this.child.find(ch => ch._id === this.param.content_id)) {
        let context = {}
        this.pane_grab({ context, _id: this._id })
        var _id = this.child.length === 0 ? null : this.child[this.child.length - 1]._id
        this.pane_param({ context, param: { content_id: _id } })
      }
      if (this.child.length === 0) {
        if (!(this.parent._id === 'root' && this.parent.child.length === 2)) {
          let context = {}
          this.pane_grab({ context, _id: this._id })
          this.pane_close(context)
        }
      }
    }
  },
  computed: {
    content () {
      var context = {}
      this.pane_grab({ context, _id: this.param.content_id })
      return context.grab || {
        id: null,
        param: {
          type: 'default'
        },
        parent: this.parent
      }
    },
    ...mapState({
      nobar: state => state.syspane.nobar || false
    })
  },
  components: { Tab, DComp, PaneDropZone }
}
</script>

<style lang="scss" scoped>
.g2u-tabs {
  min-width: 0px;
  overflow: auto;
}
</style>
