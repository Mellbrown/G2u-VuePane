export default {
  pane_activate: (state, payload) => {
    var context = payload
    state.syspane.activate = context.grab
  },
  pane_resize: (state, payload) => {
    var { context, size } = payload
    var grab = context.grab
    grab.param = {
      ...grab.param,
      ...size
    }
  },
  pane_close: (state, payload) => {
    var context = payload
    var grab = context.grab
    var parent = grab.parent
    parent.child = parent.child.filter(ch => {
      return ch._id !== context.grab._id
    })
    state.syspane.list[context.grab] = undefined
    delete state.syspane.list[context.grab]
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
    grab.child.push(pane)
    state.syspane.list[_id] = pane
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
      root,
      activate: root
    }
  }
}
