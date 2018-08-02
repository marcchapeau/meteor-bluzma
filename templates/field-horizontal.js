import { Template } from 'meteor/templating'

import './field-horizontal.html'

const attributs = {
  body: true,
  class: {class: classes => classes},
  label: true,
  size: true
}

Template.bluzmaFieldHorizontal.onCreated(function () {
})

Template.bluzmaFieldHorizontal.onRendered(function () {
})

Template.bluzmaFieldHorizontal.helpers({
  class () {
    const data = Template.currentData()
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaFieldHorizontal.helpers.class', list)
    return list.join(' ')
  },
  fieldLabelSize () {
    const size = Template.currentData().size
    if (size) return `is-${size}`
  },
  others () {
    const data = Template.currentData()
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaFieldHorizontal.helpers.others', list)
    if (Object.keys(list).length) return list
  }
})

Template.bluzmaFieldHorizontal.events({
})

Template.bluzmaFieldHorizontal.onDestroyed(function () {
})
