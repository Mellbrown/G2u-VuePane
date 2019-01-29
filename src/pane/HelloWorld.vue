<template>
  <div class="flex grow p-3">
    <h3>저는 {{_id}}입니다.</h3>
    <p>만나서 반갑습니다.</p>
    <h3>별칭은 {{param.alias || '?'}}</h3>
    <input class="form-control" type="text" v-model="text" @keyup.enter="setalias"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      text: ''
    }
  },
  props: ['_id', 'type', 'param', 'parent'],
  mounted () {
    this.onActivate()
  },
  watch: {
    _id () {
      this.onActivate()
    },
    param () {
      this.text = this.param.alias
    }
  },
  methods: {
    onActivate () {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      if (!context.grab) return
      this.pane_setTitle({ context, title: '🙌 안녕하세요! ' + this.param.alias })
    },
    setalias () {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      this.pane_param({ context,
        param: {
          alias: this.text,
          title: '🙌 안녕하세요! ' + this.text
        } })
    },
    ...mapMutations(['pane_grab', 'pane_setTitle', 'pane_param'])
  }
}
</script>

<style>

</style>
