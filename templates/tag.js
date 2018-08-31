import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './tag.html'

// https://bulma.io/documentation/elements/button

const bluzmaTags = new Bluzma('Tags', ['addons'])

bluzmaTags.helpers({
  addons: () => Template.currentData().addons && 'has-addons'
})

bluzmaTags.register()

const bluzmaTag = new Bluzma('Tag', ['content', 'delete'])

bluzmaTag.helpers({
  color () {
    const color = Template.currentData().color
    return color && `is-${color}`
  },
  delete: () => Template.currentData().delete && 'is-delete',
  deleteSize () {
    const size = Template.currentData().size
    if (!size || size === 'medium') return 'is-small'
  },
  isA () {
    const data = Template.currentData()
    return data.href || data.onClick
  },
  onDelete: () => !!Template.currentData().onDelete,
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  }
})

bluzmaTag.register()
