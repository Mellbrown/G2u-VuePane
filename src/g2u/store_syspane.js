export default {
  pane_split: PaneSplit,
  pane_nobar: PaneNobar,
  pane_deactivate: PaneDeactivate,
  pane_activate: PaneActivate,
  pane_param: PaneParam,
  pane_resize: PaneResize,
  pane_nth: PaneNth,
  pane_close: PaneClose,
  pane_append: PaneAppend,
  pane_open: PaneOpen,
  pane_grab: PaneGrab,
  pane_parent: PaneParent,
  pane_root: PaneRoot,
  pane_setTitle: PaneSetTitle,
  pane_init: PaneInit
}

function PaneSplit (state, payload) {
  var { context, splitTo, drop } = payload
  var pane = context.grab
  var panes = pane.parent
  var changeDirection =
    (panes.param.direction === 'vertical' && (splitTo === 'left' || splitTo === 'right')) ||
    (panes.param.direction !== 'vertical' && (splitTo === 'top' || splitTo === 'bottom'))

  {
    let context = { grab: panes }
    PaneNth(state, { context, _id: pane._id })
    if (changeDirection) {
      context.openAt = context.nth
      PaneOpen(state, { context,
        type: 'panes',
        param: {
          direction: panes.param.direction === 'vertical' ? 'horizontal' : 'vertical'
        }
      }) // 기존 자리에 새 Panes
      PaneClose(state, { grab: pane }) // 기존 Pane Pop
      context = { grab: context.open }
      if (pane.child.length !== 0) PaneAppend(state, { context, pane })
      context.nth = 0
    }
    context.openAt = context.nth + (splitTo === 'bottom' || splitTo === 'right' ? 1 : 0)
    PaneOpen(state, { context, type: 'pane', param: {} })
    context.grab = context.open
    PaneAppend(state, { context, pane: drop })
  }
}

function PaneNobar (state, payload) {
  var nobar = payload
  state.syspane.nobar = nobar
}

function PaneDeactivate (state, payload) {
  var _id = payload
  if (state.syspane.activate && state.syspane.activate._id === _id) {
    state.syspane.activate = null
  }
}

function PaneActivate (state, payload) {
  var context = payload
  state.syspane.activate = context.grab
}

function PaneResize (state, payload) {
  var { context, size } = payload
  var grab = context.grab
  grab.param = {
    ...grab.param,
    ...size
  }
}

function PaneParam (state, payload) {
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
}

function PaneNth (state, payload) {
  var { context, _id } = payload
  context.nth = context.grab.child.findIndex(ch => ch._id === _id)
}

function PaneClose (state, payload) {
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
}

function PaneAppend (state, payload) {
  var { context, pane } = payload
  var len = context.grab.child.length
  var openAt = context.openAt || context.grab.child.length
  openAt = openAt > 0 && openAt <= len ? openAt : len
  pane.parent = context.grab
  context.grab.child.splice(openAt, 0, pane)
  state.syspane.list[pane._id] = pane
  if (pane.type === 'pane') state.syspane.lstpane[pane._id] = pane
  context.open = pane
}

function PaneGrab (state, payload) {
  var { context, _id } = payload
  context.grab = state.syspane.list[_id]
}

function PaneRoot (state, payload) {
  var context = payload
  context.grab = state.syspane.root
}

function PaneParent (state, payload) {
  var { context } = payload
  var grab = context.grab
  context.grab = grab.parent._id
}

function PaneOpen (state, payload) {
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
}

function PaneSetTitle (state, payload) {
  var { context, title } = payload
  context.grab.param = {
    ...context.grab.param,
    title
  }
}

function PaneInit (state) {
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
    nobar: true,
    lstpane: { },
    root,
    activate: root
  }
}
