<template>
  <div class="flex grow p-3">
    <h1>만나서 반갑습니다.</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent'],
  mounted () {
    var context = {}
    this.pane_grab({ context, _id: this._id })
    this.pane_setTitle({ context, title: '🙌 안녕하세요!' })
  },
  methods: {
    ...mapMutations(['pane_grab', 'pane_setTitle'])
  }
}
</script>

<style>

</style>
