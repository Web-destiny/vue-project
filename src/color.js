export default {
  bind(el, bindings, vnode){
    el.style.color = 'green'
    console.log('bind')
  },

  inserted(el, bindings, vnode){
    console.log('inserted')
  },
  update(el, bindings, vnode, oldVnode){
    console.log('update')
  },
  componentUpdated(el, bindings, vnode){
    console.log('componentUpdated')
  },
  unbind(){
    console.log('unbind')
  }
}
