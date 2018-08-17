import { Template } from 'meteor/templating'
import { mapAttributsToClass, mapAttributsToOthers } from '../helpers'

import './tag.html'

const attributs = [
  'label',
  'onClick',
  'onDelete'
]

Template.bluzmaTag.onCreated(function () {
})

Template.bluzmaTag.onRendered(function () {
})

Template.bluzmaTag.helpers({
  class () {
    const data = Template.currentData()
    return mapAttributsToClass(data)
  },
  deleteSize () {
    // const size = Template.currentData().isMedium
    // if (!size || size === 'medium') return 'is-small'
  },
  isA () {
    const data = Template.currentData()
    return data.href || data.onClick
  },
  onDelete: () => !!Template.currentData().onDelete,
  others () {
    const data = Template.currentData()
    return mapAttributsToOthers(data, attributs)
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
