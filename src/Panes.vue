<template>
  <div class="df fg fb" :style="{flexDirection: info.direction}">
    <div v-for="(child, c) in info.subpane" :key="c" class="df"
      :style="{
        height: child.height || 'auto',
        width: child.width || 'auto',
        flexGrow: !!child.width ? '' : 1,
        flexBasis: !!child.width ? '' : 0
      }">
      <panes
        v-if="child.type === 'panes'"
        :bus="bus"
        :info="child"/>
      <pane
        v-if="child.type === 'pane'"
        :bus="bus"
        :info="child"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Pane from './Pane.vue'

export default {
  props: {
    bus: { type: Vue, default: () => new Vue() },
    info: { type: Object, required: true }
  },
  name: 'panes',
  components: { Pane }
}
</script>

<style>

</style>
