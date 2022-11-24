export default {
  bind(el, bindings, vnode){
    // el.style.color = 'green'
    el.style.color = bindings.value[0]
  },

}
