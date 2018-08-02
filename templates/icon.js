import { Template } from 'meteor/templating'

import './icon.html'

const attributs = {
  class: {class: classes => classes},
  color: {class: color => `has-text-${color}`},
  icon: true,
  size: {class: size => `is-${size}`}
}

Template.bluzmaIcon.onCreated(function () {
})

Template.bluzmaIcon.onRendered(function () {
})

Template.bluzmaIcon.helpers({
  class () {
    const data = Template.currentData()
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaIcon.helpers.class', list)
    return list.join(' ')
  },
  others () {
    const data = Template.currentData()
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaIcon.helpers.others', list)
    return list
  }
})

Template.bluzmaIcon.events({
})

Template.bluzmaIcon.onDestroyed(function () {
})
