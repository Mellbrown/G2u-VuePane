export default {
  drag_end (state, payload) {
    var context = payload
    context.drop = state.sysdrag.drop
    state.sysdrag = null
  },
  drag_cancle (state, payload) {
    state.sysdrag = null
  },
  drag_start (state, payload) {
    state.sysdrag = payload
  },
  drag_init (state, payload) {
    state.sysdrag = null
  }
}
