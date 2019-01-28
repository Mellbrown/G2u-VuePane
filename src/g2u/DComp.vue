<template>
  <div :class="clsWrapcontent">
    <component v-if="component" :is="component"
      :_id="_id"
      :type="type"
      :param="param"
      :parent="parent"/>
  </div>
</template>

<script>
export default {
  props: ['path', '_id', 'type', 'param', 'parent', 'wrap_content'],
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
    },
    clsWrapcontent () {
      return this.wrap_content ? ['in-block'] : ['flex', 'grow']
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
