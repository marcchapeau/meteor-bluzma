import { Template } from 'meteor/templating'

import './modal.html'

Template.bluzmaModalCard.onCreated(function () {
  this.attributs = {
    class: {class: classes => classes}
  }
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

Template.bluzmaModalCardHeader.onCreated(function () {
  this.attributs = {
    class: {class: classes => classes},
    label: true
  }
})

Template.bluzmaModalCardHeader.helpers({
  class () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaModalCardHeader.helpers.class', list)
    return list.join(' ')
  },
  others () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaModalCardHeader.helpers.others', list)
    if (Object.keys(list).length) return list
  }
})

Template.bluzmaModalCardBody.onCreated(function () {
  this.attributs = {
    class: {class: classes => classes}
  }
})

Template.bluzmaModalCardBody.helpers({
  class () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaModalCardBody.helpers.class', list)
    return list.join(' ')
  },
  others () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaModalCardBody.helpers.others', list)
    if (Object.keys(list).length) return list
  }
})

Template.bluzmaModalCardFooter.onCreated(function () {
  this.attributs = {
    class: {class: classes => classes}
  }
})

Template.bluzmaModalCardFooter.helpers({
  class () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaModalCardFooter.helpers.class', list)
    return list.join(' ')
  },
  others () {
    const data = Template.currentData()
    const attributs = Template.instance().attributs
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaModalCardFooter.helpers.others', list)
    if (Object.keys(list).length) return list
  }
})
