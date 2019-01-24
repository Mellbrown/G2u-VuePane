<template>
  <div class="df fg fb fc p-3">
    <h1>만나서 반갑습니다.</h1>
  </div>
</template>

<script>
export default {
  props: ['info', 'bus'],
  mounted () {
    this.bus.$emit('setTitle', {key: this.info.key, title: '🙌 안녕하세요!'})
  }
}
</script>

<style>

</style>
