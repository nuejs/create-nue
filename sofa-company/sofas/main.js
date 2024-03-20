
class ColorSelector extends HTMLDivElement {
  constructor() {
    super()
    const els = [ ...this.children]


    els.forEach((el, i) => {
      el.onclick = () =>  {
        els.forEach(el => el.removeAttribute('selected'))
        const shade = el.getAttribute('shade')
        preview.setAttribute('shade', shade)
        el.setAttribute('selected', 1)
      }
      if (!i) el.setAttribute('selected', 1)
    })
  }

}

customElements.define('color-selector', ColorSelector, { extends: 'div' })
