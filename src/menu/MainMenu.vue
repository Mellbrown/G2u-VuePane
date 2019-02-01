<template>
  <div class="flex grow" @mouseleave="requestClose">
    <h1 class="m-2 text-center">메뉴</h1>
    <div class="border mb-2"/>
    <div class="btn bg-light m-2" @click="openHello">
      HelloWorld 🙌
    </div>
    <div class="btn bg-light m-2" @click="openCal">
      달력 📆
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['syspane']),
    ...mapGetters(['pane_activate'])
  },
  methods: {
    openCal () {
      var context = { grab: this.pane_activate }
      this.pane_open({ context, type: 'FullCalendar', param: { title: '📆 달력' } })
    },
    openHello () {
      var context = { grab: this.pane_activate }
      this.pane_open({ context, type: 'HelloWorld', param: { title: '🙌 HelloWorld' } })
    },
    requestClose () {
      // this.$emit('request-close')
    },
    ...mapMutations(['pane_open'])
  }
}
</script>

<style>

</style>
