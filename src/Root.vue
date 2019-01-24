<template>
  <panes :bus="bus" :info="root"/>
</template>

<script>
import Vue from 'vue'
import Panes from './Panes.vue'
import _ from 'lodash'

export default {
  components: { Panes },
  data () {
    return {
      bus: new Vue(),
      panes: [],
      root: {
        key: Symbol('panes'),
        type: 'panes',
        direction: 'row',
        subpane: []
      }
    }
  },
  mounted () {
    this.newPane('/',{ nobar: false, width: 'auto' })
      this.newTab('/0',{ type:'Menu', title:'menu' })
    this.newPanes('/',{ direction:'row'})
      this.newPane('/1', { nobar: true })
        this.newTab('/1/0',{ type: 'Hello', title: 'Hello!'})
    
    this.bus.$on('paneResize', option => {
      var { key , size } = option
      var pane = this.panes.find(p => p.key === key)
      _.extend(pane, size)
    })
    this.bus.$on('setTitle', option => {
      var { key, title } = option
      var pane = this.panes.find(p => p.key === key)
      pane.title = title
    })
    this.bus.$on('openTab', option => {
      var { key, type, title, info } = option
      var pane
      if ( typeof key === 'string')
        pane = this.path2tar(key)
      else 
        pane = this.panes.find(p => p.key === key)
        
      this.newTab(pane, {type, title, info})
    })

    this.bus.$on('closeTab', option => {
       var { key, tabkey } = option
       var pane = this.panes.find(p => p.key === key)
       pane.tabs = pane.tabs.filter(tab => {
         return tab.key !== tabkey
       })
       this.panes = this.panes.filter( tab => {
         return tab.key !== tabkey
       })
    })

    this.$store.state.panebus = this.bus
  },
  methods: {
    path2tar (path) {
      var pes = path.split('/')
      var tar = this.root
      pes.forEach(p => {
        if (p && !isNaN(Number(p))){
          var type = tar.type
          switch (type) {
            case 'panes': tar = tar.subpane[Number(p)]; break
            case 'pane': tar = tar.tabs[Number(p)]; break
            case 'tab': tar = tar; break
          }
        }
      })
      return tar
    },
    pushPane (tar, pane){
      var type = tar.type
      switch (type) {
        case 'panes': 
          tar.subpane = [...tar.subpane, pane];
          break;
        case 'pane': 
          tar.tabs = [...tar.tabs, pane];
          break;
      }
    },
    newPanes (tar, option) {
      var panes = {
        key: Symbol('panes'),
        type: 'panes',
        ...option,
        subpane: []
      }
      if (typeof tar === 'string')
        this.pushPane(this.path2tar(tar), panes)
      else
        this.pushPane(tar, panes)
      this.panes.push(panes)
    },
    newPane (tar, option) {
      var pane = {
        key: Symbol('pane'),
        type: 'pane',
        ...option,
        tabs: []
      }
      if (typeof tar === 'string')
        this.pushPane(this.path2tar(tar), pane)
      else
        this.pushPane(tar, pane)
      this.panes.push(pane)
    },
    newTab (tar, option) {
      var tab = {
        key: Symbol('tab'),
        ...option
      }
      if (typeof tar === 'string')
        this.pushPane(this.path2tar(tar), tab)
      else
        this.pushPane(tar, tab)
      this.panes.push(tab)
    }
  }
}
</script>

<style>

</style>
