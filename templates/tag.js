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

// import { Template } from 'meteor/templating'
// import { mapAttributsToClass, mapAttributsToOthers } from '../helpers'

// import './tag.html'

// const attributs = [
//   'label',
//   'onClick',
//   'onDelete'
// ]

// Template.bluzmaTag.onCreated(function () {
// })

// Template.bluzmaTag.onRendered(function () {
// })

// Template.bluzmaTag.helpers({
//   class () {
//     const data = Template.currentData()
//     return mapAttributsToClass(data)
//   },
//   deleteSize () {
//     // const size = Template.currentData().isMedium
//     // if (!size || size === 'medium') return 'is-small'
//   },
//   isA () {
//     const data = Template.currentData()
//     return data.href || data.onClick
//   },
//   onDelete: () => !!Template.currentData().onDelete,
//   others () {
//     const data = Template.currentData()
//     return mapAttributsToOthers(data, attributs)
//   }
// })

// Template.bluzmaTag.events({
//   'click .delete' (evt, tpl) {
//     const onDelete = Template.currentData().onDelete
//     if (onDelete) {
//       evt.preventDefault()
//       onDelete(evt, tpl)
//     }
//   },
//   'click .tag' (evt, tpl) {
//     const onClick = Template.currentData().onClick
//     if (onClick) onClick(evt, tpl)
//   }
// })

// Template.bluzmaTag.onDestroyed(function () {
// })
