<template>
  <div class="container mt-4">
    <h1>Hello</h1>
    <p>이창의 키 : {{info && info.key}}</p>
    <div class="form-group">
      <label>이 페이지의 제목</label>
      <input type="text" class="form-control" placeholder="제목" v-model="text">
      <div class="mt-3 df fr">
        <button class="btn bg-primary" 
          :class="!text && ['disabled']"
          :tabindex="!text && -1"
          @click="titleApply">
          적용
        </button>
      </div>
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
  data () {
    return {
      text: this.info.title
    }
  },
  watch: {
    info (_new, _old) {
      this.text = _new && _new.title
    }
  },
  methods: {
    titleApply() {
      this.bus.$emit('setTitle',{
        key: this.info.key,
        title: this.text
      })
    }
  }
}
</script>

<style>

</style>
