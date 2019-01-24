<template>
  <div class="pane border">
    <div class="head bg-secondary df fac shb" v-if="info.nobar">
      <div class="tab-title df fg fb shadow-lg point"
        @click.middle="closeTab(tab.key)"
        @click.left="selectTab(tab.key)"
        :class="tabClass[t]"
        v-for="(tab, t) in info.tabs" :key="t">
        <div class="p-1"><small>{{ tab.title }}</small></div>
        <div class="df fg fr fac">
          <button class="btn wh-30 mr-1 p-0" @click.stop="closeTab(tab.key)">
            <icon icon="times"/>
          </button>
        </div>
      </div>
      <!-- <button class="btn rounded-circle bg-light ml-2 p-0 wh-30" @click="openTab">
        <icon icon="plus"/>
      </button> -->
      <div class="df fg fb fr">
        <button class="btn p-1 mr-2">
          <icon icon="ellipsis-h"/>
        </button>
      </div>
    </div>
    <div class="body bg-light">
      <component :is="content" :info="contentInfo" :bus="bus" v-if="content" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    bus: { type: Vue, default: () => new Vue() },
    info: { type: Object, required: true }
  },
  data () {
    return {
      current: null,
      content: null,
      contentType: null,
      contentInfo: null
    }
  },
  mounted () {
    if(this.info.tabs.length > 0 ) {
      this.current = this.info.tabs[0].key
    }
    this.bus.$on('resize', option => {
      var { key , size } = option
      var t = this.info.tabs.filter( tab => tab.key === key)
      if ( t.length > 0 )
        this.bus.$emit('paneResize', { key: this.info.key , size})
    })
  },
  methods: {
    selectTab (key) {
      this.current = key
    },
    openTab () {
      this.bus.$emit('openTab',{
        key: this.info.key,
        type: 'Hello',
        title: 'Untitle',
        info: { }
      });
    },
    closeTab (tabkey) {
      this.bus.$emit('closeTab', { key: this.info.key, tabkey})
      if (tabkey === this.current) {
        this.current = null
      }
    }
  },
  computed: {
    tabClass () {
      return this.info.tabs.map((tab) => {
        return this.current === tab.key ? ['bg-light'] : ['bg-dark', 'text-light']
      })
    },
    loader () {
      if (!this.contentType) {
        return () => import(`./pane/default`)
      }
      return () => import(`./pane/${this.contentType}`)
    }
  },
  watch: {
    'info.tabs': function (_new, _old) {
      var o = new Set([..._old])
      var n = _new.filter( n => !o.has(n))
      if (n.length > 0) {
        this.current = n[0].key
      }
    },
    contentType () {
      this.loader()
        .then(() => {
          this.content = () => this.loader()
        })
        .catch(() => {
          this.content = () => import(`./pane/default`)
        })
    },
    current () {
      var key = this.current
      if (!key) {
        if (this.info.tabs.length > 0){
          this.current = this.info.tabs[0].key
          return
        }
      }
      var tab = this.info.tabs.find((tab) => {
        return tab.key === key
      })
      this.contentType = tab && tab.type
      this.contentInfo = tab && {
        key: tab.key,
        title: tab.title,
        ... tab.info
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pane {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;

  .head {
    .tab-title {
      max-width: 150px;
    }
  }

  .body {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: column;
  }

}
</style>
