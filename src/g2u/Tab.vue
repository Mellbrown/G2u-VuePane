<template>
  <div class="g2u-tab flex grow h-right point px-2 py-1"
    :class="clTabActivatedColor"
    @click.left="activateTab"
    @click.middle="closeTab">
    <button class="btn mr-1 p-0"
      @click.stop="closeTab">
      <icon icon="times"/>
    </button>
    <small class="tab-title in-block grow mr-2">{{param.title}}</small>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['_id', 'type', 'param', 'parent', 'child', 'activated'],
  methods: {
    activateTab () {
      this.$emit('onactivate', this._id)
    },
    closeTab (_id) {
      var context = {}
      this.pane_grab({ context, _id: this._id })
      this.pane_close(context)
    },
    ...mapMutations(['pane_grab', 'pane_close'])
  },
  computed: {
    clTabActivatedColor () {
      return this.activated ? ['bg-light'] : ['bg-dark', 'text-light']
    }
  }
}
</script>

<style lang="scss" scoped>
.g2u-tab {
  max-width: 150px;
  overflow: hidden;
  .tab-title {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
