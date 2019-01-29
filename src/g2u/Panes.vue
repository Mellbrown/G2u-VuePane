<template>
  <div class="flex grow" :class="clsDirection">
    <div v-for="(ch,c) in child" :key="ch._id" class="flex" :style="styBounds[c]">
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
import { mapMutations } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child'],
  name: 'panes',
  watch: {
    child () {
      if (this.child.length <= 1) {
        if (this.child.length === 1) {
          // 먼저 자식 제거
          var child = this.child[0]
          this.pane_close({ grab: child })

          // 삽입할 위치 찾기
          var context = { grab: this.parent }
          this.pane_nth({ context, _id: this._id })
          context.openAt = context.nth
          this.pane_append({ context, pane: child })
        }

        // 마지막 이팬 제거
        this.pane_grab({ context, _id: this._id })
        this.pane_close(context)
      }
    }
  },
  methods: {
    ...mapMutations(['pane_close', 'pane_grab', 'pane_nth', 'pane_append'])
  },
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
