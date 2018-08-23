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
