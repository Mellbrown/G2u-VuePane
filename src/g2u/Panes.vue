<template>
  <div class="flex grow" :class="clsDirection">
    <div v-for="(ch,c) in child" :key="c" class="flex" :style="styBounds[c]">
      <panes v-if="ch.type === 'panes'"
        :_id="ch._id"
        :type="ch.type"
        :param="ch.param"
        :parent="ch.parent"
        :child="ch.child"
        />
      <pane v-else-if="ch.type === 'pane'"
        :_id="ch._id"
        :type="ch.type"
        :param="ch.param"
        :parent="ch.parent"
        :child="ch.child"
        />
      <d-comp v-else
        path="pane"
        :_id="ch._id"
        :type="ch.type"
        :param="ch.param"
        :parent="ch.parent"
        />
    </div>
  </div>
</template>

<script>
import DComp from '@/g2u/DComp.vue'
import Pane from '@/g2u/Pane.vue'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child'],
  name: 'panes',
  computed: {
    clsDirection () {
      return [this.param.direction === 'vertical' ? '' : 'h-left']
    },
    styBounds () {
      return this.child.map(ch => {
        return {
          height: ch.param.height || 'auto',
          width: ch.param.width || 'auto',
          flexGrow: ch.param.width ? 0 : 1,
          flexBasis: ch.param.width ? 'auto' : 0
        }
      })
    }
  },
  components: { Pane, DComp }
}
</script>

<style>

</style>
