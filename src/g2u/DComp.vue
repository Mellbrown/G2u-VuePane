<template>
  <div :class="clsWrapcontent">
    <component v-if="component" :is="component"
      :_id="ready && ready._id"
      :type="ready && ready.type"
      :param="ready && ready.param"
      :parent="ready && ready.parent"/>
  </div>
</template>

<script>
export default {
  props: ['path', '_id', 'type', 'param', 'parent', 'wrap_content'],
  data () {
    return {
      component: null,
      ready: null
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
  methods: {
    load () {
      this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
        .catch(() => {
          this.component = () => import('@/g2u/default.vue')
        })
    }
  },
  watch: {
    _id () {
      this.load()
    },
    component () {
      this.ready = {
        _id: this._id,
        type: this.type,
        param: this.param,
        parent: this.parent
      }
    }
  },
  mounted () {
    this.load()
  }
}
</script>
