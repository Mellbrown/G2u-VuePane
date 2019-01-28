<template>
  <div class="flex grow">
    <component v-if="component" :is="component"
      :_id="_id"
      :type="type"
      :param="param"
      :parent="parent"/>
  </div>
</template>

<script>
export default {
  props: ['path', '_id', 'type', 'param', 'parent'],
  data () {
    return {
      component: null
    }
  },
  computed: {
    loader () {
      if (!this.type) {
        return () => import(`@/${this.path}/default.vue`)
      }
      return () => import(`@/${this.path}/${this.type}`)
    }
  },
  watch: {
    type () {
      this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
        .catch(() => {
          this.component = () => import('@/g2u/default.vue')
        })
    }
  },
  mounted () {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import('@/g2u/default.vue')
      })
  }
}
</script>
