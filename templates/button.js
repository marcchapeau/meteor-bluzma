import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './button.html'

// https://bulma.io/documentation/elements/button

const bluzmaButton = new Bluzma('Button', [
  'active', 'color', 'content', 'focused', 'fullwidth', 'hovered', 'inverted',
  'loading', 'outlined', 'rounded', 'size', 'static'
])

bluzmaButton.helpers({
  active: () => Template.currentData().active && 'is-active',
  color () {
    const color = Template.currentData().color
    return color && `is-${color}`
  },
  focused: () => Template.currentData().focused && 'is-focused',
  fullwidth: () => Template.currentData().fullwidth && 'is-fullwidth',
  hovered: () => Template.currentData().hovered && 'is-hovered',
  inverted: () => Template.currentData().inverted && 'is-inverted',
  loading: () => Template.currentData().loading && 'is-loading',
  outlined: () => Template.currentData().outlined && 'is-outlined',
  rounded: () => Template.currentData().rounded && 'is-rounded',
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  static: () => Template.currentData().static && 'is-static'
})

bluzmaButton.register()

// import { Template } from 'meteor/templating'

// import './button.html'

// import { mapAttributsToClass, mapAttributsToOthers } from '../helpers'

// const attributs = [
//   'onClick',
//   'label'
// ]

// Template.bluzmaButton.helpers({
//   class () { return mapAttributsToClass(Template.currentData()) },
//   others () { return mapAttributsToOthers(Template.currentData(), attributs) }
// })

// // const attributs = {
// //   active: {class: () => 'is-active'},
// //   class: {class: classes => classes},
// //   color: {class: color => `is-${color}`},
// //   focused: {class: () => 'is-focused'},
// //   fullwidth: {class: () => 'is-fullwidth'},
// //   hovered: {class: () => 'is-hovered'},
// //   inverted: {class: () => 'is-inverted'},
// //   label: true,
// //   loading: {class: () => 'is-loading'},
// //   onClick: true,
// //   outlined: {class: () => 'is-outlined'},
// //   rounded: {class: () => 'is-rounded'},
// //   size: {class: size => `is-${size}`},
// //   static: {class: () => 'is-static'}
// // }

// Template.bluzmaButton.onCreated(function () {
// })

// Template.bluzmaButton.onRendered(function () {
// })

// // Template.bluzmaButton.helpers({
// //   class () {
// //     const data = Template.currentData()
// //     const list = []
// //     for (const prop in data) {
// //       if (attributs[prop] && attributs[prop].class) {
// //         list.push(attributs[prop].class(data[prop]))
// //       }
// //     }
// //     // console.log('bluzmaButton.helpers.class', list)
// //     return list.join(' ')
// //   },
// //   others () {
// //     const data = Template.currentData()
// //     const list = {}
// //     for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
// //     // console.log('bluzmaButton.helpers.others', list)
// //     if (Object.keys(list).length) return list
// //   }
// // })

// Template.bluzmaButton.events({
//   'click .button' (evt, tpl) {
//     const onClick = Template.currentData().onClick
//     if (onClick) onClick(evt, tpl)
//   }
// })

// Template.bluzmaButton.onDestroyed(function () {
// })
