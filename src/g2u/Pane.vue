<template>
  <div class="flex grow">
    <div class="flex h-left bg-secondary shadow">
      <tab v-for="tab in child" :key="tab._id"
        :_id="tab._id"
        :type="tab.type"
        :param="tab.param"
        :child="tab.child"
        :parent="tab.parent"
        :activated="content_id === tab._id"
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
      <pane-drop-zone/>
    </div>
  </div>
</template>

<script>
import Tab from '@/g2u/Tab.vue'
import DComp from '@/g2u/DComp.vue'
import PaneDropZone from '@/g2u/PaneDropZone.vue'
import { mapMutations } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child'],
  data () {
    return {
      content_id: null
    }
  },
  mounted () {
    var context = {}
    this.pane_grab({ context, _id: this._id })
    this.pane_activate(context)
  },
  methods: {
    onTabSelected (_id) {
      this.content_id = _id
    },
    ...mapMutations(['pane_grab', 'pane_activate'])
  },
  watch: {
    child () {
      if (!this.child.find(ch => ch._id === this.content_id)) { this.content_id = null }
    }
  },
  computed: {
    content () {
      var context = {}
      this.pane_grab({ context, _id: this.content_id })
      return context.grab || {
        id: null,
        param: {
          type: 'default'
        },
        parent: this.parent
      }
    }
  },
  components: { Tab, DComp, PaneDropZone }
}
</script>

<style>

</style>
