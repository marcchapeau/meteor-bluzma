import { Template } from 'meteor/templating'

import './button.html'

const attributs = {
  active: {class: () => 'is-active'},
  class: {class: classes => classes},
  color: {class: color => `is-${color}`},
  focused: {class: () => 'is-focused'},
  fullwidth: {class: () => 'is-fullwidth'},
  hovered: {class: () => 'is-hovered'},
  inverted: {class: () => 'is-inverted'},
  label: true,
  loading: {class: () => 'is-loading'},
  onClick: true,
  outlined: {class: () => 'is-outlined'},
  rounded: {class: () => 'is-rounded'},
  size: {class: size => `is-${size}`},
  static: {class: () => 'is-static'}
}

Template.bluzmaButton.onCreated(function () {
})

Template.bluzmaButton.onRendered(function () {
})

Template.bluzmaButton.helpers({
  class () {
    const data = Template.currentData()
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaButton.helpers.class', list)
    return list.join(' ')
  },
  others () {
    const data = Template.currentData()
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaButton.helpers.others', list)
    return list
  }
})

Template.bluzmaButton.events({
  'click .button' (evt, tpl) {
    const onClick = Template.currentData().onClick
    if (onClick) onClick(evt, tpl)
  }
})

Template.bluzmaButton.onDestroyed(function () {
})
