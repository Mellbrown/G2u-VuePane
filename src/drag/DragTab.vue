<template>
  <div class="g2u-drag-tab in-blcok bg-secondary text-light p-1 shadow">
    {{ param && param.title}}
  </div>
</template>

<script>
export default {
  props: ['param']
}
</script>

<style lang="scss" scoped>
.g2u-drag-tab {
  max-width: 150px;
  transform: rotate(-15deg);
}
</style>

