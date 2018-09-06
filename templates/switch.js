import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './switch.html'

// https://wikiki.github.io/form/switch

// Switch

const bluzmaSwitch = new Bluzma('Switch', [
  'checked', 'color', 'content', 'disabled', 'id', 'name', 'outlined',
  'rounded', 'rtl', 'size', 'thin'
])

bluzmaSwitch.helpers({
  checked: () => Template.currentData().checked && 'checked',
  color () {
    const color = Template.currentData().color
    return color && `is-${color}`
  },
  disabled: () => Template.currentData().disabled && 'disabled',
  outlined: () => Template.currentData().outlined && 'is-outlined',
  rounded: () => Template.currentData().rounded && 'is-rounded',
  rtl: () => Template.currentData().rtl && 'is-rtl',
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  thin: () => Template.currentData().thin && 'is-thin'
})

bluzmaSwitch.register()
