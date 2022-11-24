export default {
  bind(el, bindings, vnode){
    console.log(bindings)


    const fontModifier = bindings.modifiers['font']
    if(fontModifier){
      el.style.fontSize = '20px'
    }
    const delayModifier = bindings.modifiers['delay']

    let delay = 0

    if(delayModifier){
      delay = 2000
    }
    setTimeout(() => {
      const arg = bindings.arg
      el.style[arg] = bindings.value
    }, delay)
  },

}
