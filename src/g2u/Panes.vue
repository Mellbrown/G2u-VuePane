<template>
  <div class="flex grow" :class="clsDirection">
    <template v-for="(ch,c) in child">
      <div :key="ch._id" class="flex" :style="styBounds[c]" :ref="'size'+c">
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
      <div
        v-if="c !== child.length-1 && (ch.param.resize === undefined ? true : ch.param.resize)"
        class="pl-1 pt-1 bg-light"
        :class="clsResize" :key="c"
        @mousedown="dargbardown($event, ch._id, c)">

      </div>
    </template>
  </div>
</template>

<script>
// TODO: 드래그 만들기
import DComp from '@/g2u/DComp.vue'
import Pane from '@/g2u/Pane.vue'
import { mapMutations } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child'],
  name: 'panes',
  data () {
    return {
      drag: null
    }
  },
  mounted () {
    this.selfRemover()
  },
  watch: {
    child () {
      this.selfRemover()
    }
  },
  methods: {
    dargbarmove (e) {
      if (this.param.direction === 'vertical') {
        var diffY = e.clientY - this.drag.clientY
        this.pane_resize({
          context: this.drag.context,
          size: {
            height: this.drag.setsize + diffY + 'px'
          }
        })
      } else {
        var diffX = e.clientX - this.drag.clientX
        this.pane_resize({
          context: this.drag.context,
          size: {
            width: this.drag.setsize + diffX + 'px'
          }
        })
      }
    },
    dargbardown (e, _id, c) {
      window.addEventListener('mousemove', this.dargbarmove)
      window.addEventListener('mouseup', this.dargbarup)

      var context = {}
      this.pane_grab({ context, _id })
      var setsize = 0
      if (this.param.direction === 'vertical') {
        var height = context.grab.param.height
        if (height && height !== 'auto') {
          setsize = Number(height.replace('px', ''))
        } else {
          setsize = this.$refs['size' + c][0].offsetHeight
        }
      } else {
        var width = context.grab.param.width
        if (width && width !== 'auto') {
          setsize = Number(width.replace('px', ''))
        } else {
          setsize = this.$refs['size' + c][0].offsetWidth
        }
      }

      this.drag = { clientX: e.clientX, clientY: e.clientY, setsize, context }
    },
    dargbarup (e) {
      window.removeEventListener('mousemove', this.dargbarmove)
      window.removeEventListener('mouseup', this.dargbarup)
      this.drag = null
    },
    selfRemover () {
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
    },
    ...mapMutations(['pane_close', 'pane_grab', 'pane_nth', 'pane_append', 'pane_resize'])
  },
  computed: {
    clsDirection () {
      return [this.param.direction === 'vertical' ? '' : 'h-left']
    },
    clsResize () {
      return this.param.direction === 'vertical' ? ['v-resize'] : ['h-resize']
    },
    styBounds () {
      return this.child.map((ch, i, arr) => {
        var last = i === arr.length - 1
        var v = this.param.direction === 'vertical'
        var w = ch.param.width
        var h = ch.param.height
        return {
          height: !last && h ? h : 'auto',
          width: !last && w ? w : 'auto',
          flexGrow: !last && (v && h || !v && w) ? 0 : 1,
          flexBasis: !last && (v && h || !v && w) ? 'auto' : 0
        }
      })
    }
  },
  components: { Pane, DComp }
}
</script>

<style>

</style>
