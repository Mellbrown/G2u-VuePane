<template>
  <div class="df fg fb position-relative">
    <div :style="{
      position: 'absolute',
      left: '50%',
      top: '40%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 'lighter',
      color : 'gray'
    }">
      <transition name="show">
        <div class="p-2 border border-secondary rounded">
          <h2>탭이 비어있습니다</h2>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    info: { type: Object, default: () => {} },
    bus: { type: Vue, default: () => new Vue() }
  },
}
</script>

<style lang="scss" scoped>
.show-enter {
  opacity: 0;
}
.show-enter-active {
  transition: opacity 1s;
}
</style>

