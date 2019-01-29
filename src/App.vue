<template>
  <div id="app">
    <panes v-if="syspane"
      :_id="syspane.root._id"
      :type="syspane.root.type"
      :param="syspane.root.param"
      :parent="syspane.root.parent"
      :child="syspane.root.child"/>
    <drag/>
  </div>
</template>
<script>
import Panes from '@/g2u/Panes.vue'
import Drag from '@/g2u/Drag.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  mounted () {
    this.pane_init()
    var context = {}
    this.pane_root(context)
    this.pane_open({ context, type: 'Menu', param: { width: 'auto' } })
    this.pane_open({ context, type: 'pane', param: {} })
    context.grab = context.open
    this.pane_open({
      context,
      type: 'HelloWorld',
      param: {
        title: '만나서 반갑습니다.'
      }
    })
  },
  computed: {
    ...mapState(['syspane', 'sysdrag'])
  },
  methods: {
    ...mapMutations([
      'pane_init',
      'pane_root',
      'pane_open'
    ])
  },
  components: { Panes, Drag },
  name: 'app'
}
</script>
