export default {
  bind(el, bindings, vnode){
    // el.style.color = 'green'
    console.log(bindings)
    const arg = bindings.arg
    el.style[arg] = bindings.value

  },

}
