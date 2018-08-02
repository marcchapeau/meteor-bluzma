import { Template } from 'meteor/templating'

import './modal-card.html'

Template.bluzmaModalCard.onCreated(function () {
  this.attributs = {
    class: {class: classes => classes}
  }
})

Template.bluzmaModalCard.onRendered(function () {
})

Template.bluzmaModalCard.helpers({
  class () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaModalCard.helpers.class', list)
    return list.join(' ')
  },
  others () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaModalCard.helpers.others', list)
    if (Object.keys(list).length) return list
  }
})

Template.bluzmaModalCard.events({
})

Template.bluzmaModalCard.onDestroyed(function () {
})
