import { Template } from 'meteor/templating'

import './tag.html'

const attributs = {
  class: {class: classes => classes},
  color: {class: color => `is-${color}`},
  delete: {class: () => 'is-delete'},
  label: true,
  onClick: true,
  onDelete: true,
  size: {class: size => `is-${size}`}
}

Template.bluzmaTag.onCreated(function () {
})

Template.bluzmaTag.onRendered(function () {
})

Template.bluzmaTag.helpers({
  class () {
    const data = Template.currentData()
    const list = []
    for (const prop in data) {
      if (attributs[prop] && attributs[prop].class) {
        list.push(attributs[prop].class(data[prop]))
      }
    }
    // console.log('bluzmaTag.helpers.class', list)
    return list.join(' ')
  },
  deleteSize () {
    const size = Template.currentData().size
    if (!size || size === 'medium') return 'is-small'
  },
  isA () {
    const data = Template.currentData()
    return data.href || data.onClick
  },
  onDelete: () => !!Template.currentData().onDelete,
  others () {
    const data = Template.currentData()
    const list = {}
    for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
    // console.log('bluzmaTag.helpers.others', list)
    if (Object.keys(list).length) return list
  }
})

Template.bluzmaTag.events({
  'click .delete' (evt, tpl) {
    const onDelete = Template.currentData().onDelete
    if (onDelete) {
      evt.preventDefault()
      onDelete(evt, tpl)
    }
  },
  'click .tag' (evt, tpl) {
    const onClick = Template.currentData().onClick
    if (onClick) onClick(evt, tpl)
  }
})

Template.bluzmaTag.onDestroyed(function () {
})
