
export const lib = [
{
  name: 'dialog-opener',
  tagName: 'a',
  tmpl: '<a class="dialog-opener" @click="0"><img loading="lazy" src="img/settings.svg" class="icon"></a>',
  Impl: class { 
    open() {
      const key = this.root.getAttribute('key')
      const dialog = window[key]
      if (dialog) dialog.showModal()
    }
   },
  fns: [
    (_,e) => { _.open.call(_, e) }
  ]
},{
  name: 'theme-selector',
  tagName: 'dialog',
  tmpl: '<dialog><h2>Select theme</h2><section class="theme-options"><label :for="0" :style="1" class="theme"><input name="theme" type="radio" $checked="2" @change="3"><h4>:4:</h4></label></section></dialog>',
  Impl: class { 
    change(el, e) {
      document.body.className = el.class || el.name.toLowerCase()
      themes.close()
    }
   },
  fns: [
    _ => ['el', _.themes, 'i'],
    _ => ['background-color: #',_.el.color],
    _ => !_.i,
    (_,e) => { _.change(_.el, e) },
    _ => [_.el.name]
  ]
}]
export default lib[0]