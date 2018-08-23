import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './icon.html'

// https://bulma.io/documentation/elements/icon

const bluzmaIcon = new Bluzma('Icon', ['icon', 'size'])

bluzmaIcon.helpers({
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  }
})

bluzmaIcon.register()












// const attributs = {
//   class: {class: classes => classes},
//   color: {class: color => `has-text-${color}`},
//   icon: true,
//   size: {class: size => `is-${size}`},
//   onClick: true
// }

// Template.bluzmaIcon.onCreated(function () {
// })

// Template.bluzmaIcon.onRendered(function () {
// })

// Template.bluzmaIcon.helpers({
//   class () {
//     const data = Template.currentData()
//     const list = []
//     for (const prop in data) {
//       if (attributs[prop] && attributs[prop].class) {
//         list.push(attributs[prop].class(data[prop]))
//       }
//     }
//     // console.log('bluzmaIcon.helpers.class', list)
//     return list.join(' ')
//   },
//   others () {
//     const data = Template.currentData()
//     const list = {}
//     for (const prop in data) if (!attributs[prop]) list[prop] = data[prop]
//     // console.log('bluzmaIcon.helpers.others', list)
//     if (Object.keys(list).length) return list
//   }
// })

// Template.bluzmaIcon.events({
//   'click .button' (evt, tpl) {
//     const onClick = Template.currentData().onClick
//     if (onClick) onClick(evt, tpl)
//   }
// })

// Template.bluzmaIcon.onDestroyed(function () {
// })
