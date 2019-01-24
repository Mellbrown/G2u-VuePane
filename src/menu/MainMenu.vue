<template>
  <div class="df fg fb fc">
    <h1 class="m-1">메뉴</h1>
    <div class="btn bg-light m-2" @click="openHello">
      헬로
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bus: null
    }
  },
  methods: {
    openHello () {
      this.bus.$emit('openTab',{
        key:'/1/0',
        type: 'Hello',
        title: 'Unititle',
        info: {}
      })
    }
  },
  mounted () {
    this.bus = this.$store.state.panebus
  }
}
</script>

<style>

</style>
