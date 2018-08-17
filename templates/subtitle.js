import { Template } from 'meteor/templating'

const attributs = {
  size: {class: size => `is-${size}`},
  class: {class: classes => classes}
}

Template.bluzmaSubtitle.helpers({
  class () {
    const data = Template.currentData()
    return Object.keys(data)
      .filter(k => attributs[k] && attributs[k].class)
      .map(k => attributs[k].class(data[k]))
      .join(' ')
  }
})
