<template>
  <div class="frame flex" v-show="sysdrag">
    <div class="flex grow" :class="over === 'center' ? 'bg-secondary opacity-50' : ''"/>
    <div class="frame flex h-left">
      <div class="w-50" :class="over === 'left' ? 'bg-secondary opacity-50' : ''"/>
      <div class="w-50" :class="over === 'right' ? 'bg-secondary opacity-50' : ''"/>
    </div>
    <div class="frame flex">
      <div class="h-50" :class="over === 'top' ? 'bg-secondary opacity-50' : ''"/>
      <div class="h-50" :class="over === 'bottom' ? 'bg-secondary opacity-50' : ''"/>
    </div>
    <div class="frame flex h-left">
      <div class="w-25" @mouseenter="over = 'left'" />
      <div class="flex grow ">
        <div class="h-25" @mouseenter="over = 'top'" />
        <div class="grow" @mouseenter="over = 'center'" />
        <div class="h-25" @mouseenter="over = 'bottom'" />
      </div>
      <div class="w-25" @mouseenter="over = 'right'" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      over: null
    }
  },
  computed: {
    ...mapState(['sysdrag'])
  }
}
</script>

<style lang="scss" scoped>
.opacity-50 { opacity: .5;}
</style>
