export default {
  pane_nobar: (state, payload) => {
    var nobar = payload
    state.syspane.nobar = nobar
  },
  pane_deactivate: (state, payload) => {
    var _id = payload
    if (state.syspane.activate && state.syspane.activate._id === _id) {
      state.syspane.activate = null
    }
  },
  pane_activate: (state, payload) => {
    var context = payload
    state.syspane.activate = context.grab
  },
  pane_param: (state, payload) => {
    var { context, param, overwrite } = payload
    var grab = context.grab
    if (overwrite) {
      grab.param = param
    } else {
      grab.param = {
        ...grab.param,
        ...param
      }
    }
  },
  pane_resize: (state, payload) => {
    var { context, size } = payload
    var grab = context.grab
    grab.param = {
      ...grab.param,
      ...size
    }
  },
  pane_nth: (state, payload) => {
    var { context, _id } = payload
    for (var i in context.grab.child) {
      if (context.grab.child[i]._id === _id) {
        context.nth = Number(i)
        return
      }
    }
    context.nth = -1
  },
  pane_close: (state, payload) => {
    var context = payload
    var grab = context.grab
    var parent = grab.parent
    parent.child = parent.child.filter(ch => {
      return ch._id !== grab._id
    })
    grab.parent = null
    state.syspane.list[grab._id] = undefined
    delete state.syspane.list[grab._id]
    if (grab.type === 'pane') {
      state.syspane.lstpane[grab._id] = undefined
      delete state.syspane.lstpane[grab._id]
    }
  },
  pane_append: (state, payload) => {
    var { context, pane } = payload
    var len = context.grab.child.length
    var openAt = context.openAt || context.grab.child.length
    openAt = openAt > 0 && openAt <= len ? openAt : len
    pane.parent = context.grab
    context.grab.child.splice(openAt, 0, pane)
    state.syspane.list[pane._id] = pane
    if (pane.type === 'pane') state.syspane.lstpane[pane._id] = pane
    context.open = pane
  },
  pane_open: (state, payload) => {
    var { context, type, param } = payload
    var grab = context.grab
    var _id = type + '-' + Math.round(Math.random() * 99999999)
    var pane = {
      _id,
      type,
      param,
      parent: grab,
      child: []
    }
    var len = grab.child.length
    var openAt = context.openAt === undefined ? grab.child.length : context.openAt
    openAt = openAt >= 0 && openAt <= len ? openAt : len
    grab.child.splice(openAt, 0, pane)
    state.syspane.list[_id] = pane
    if (type === 'pane') state.syspane.lstpane[_id] = pane
    context.open = pane
  },
  pane_grab (state, payload) {
    var { context, _id } = payload
    context.grab = state.syspane.list[_id]
  },
  pane_parent (state, payload) {
    var { context } = payload
    var grab = context.grab
    context.grab = grab.parent._id
  },
  pane_root: (state, payload) => {
    var context = payload
    context.grab = state.syspane.root
  },
  pane_setTitle: (state, payload) => {
    var { context, title } = payload
    context.grab.param = {
      ...context.grab.param,
      title
    }
  },
  pane_init: (state) => {
    var _id = 'root'
    var root = {
      _id,
      type: 'panes',
      param: {
        direction: 'horizontal'
      },
      parent: null,
      child: []
    }
    state.syspane = {
      list: {
        [_id]: root
      },
      nobar: false,
      lstpane: { },
      root,
      activate: root
    }
  }
}
