<template>
  <div class="flex grow" @mouseleave="requestClose">
    <h1 class="m-1">메뉴</h1>
    <div class="btn bg-light m-2" @click="openHello">
      HelloWorld 🙌
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['syspane'])
  },
  methods: {
    openHello () {
      var context = { grab: this.syspane.activate }
      this.pane_open({ context, type: 'HelloWorld', param: { title: 'Untitled' } })
    },
    requestClose () {
      this.$emit('request-close')
    },
    ...mapMutations(['pane_open'])
  }
}
</script>

<style>

</style>
