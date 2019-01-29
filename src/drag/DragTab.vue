<template>
  <div class="g2u-drag-tab in-blcok bg-secondary text-light px-2 py-1 shadow">
    <small>{{ param && param.title}}</small>
  </div>
</template>

<script>
export default {
  props: ['param']
}
</script>

<style lang="scss" scoped>
.g2u-drag-tab {
  width: 150px;
  min-width: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: rotate(-15deg);
}
</style>
