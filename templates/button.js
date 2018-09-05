import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './button.html'

// https://bulma.io/documentation/elements/button

const bluzmaButton = new Bluzma('Button', [
  'active', 'color', 'content', 'focused', 'fullwidth', 'hovered', 'inverted',
  'loading', 'outlined', 'rounded', 'selected', 'size', 'static'
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
  selected: () => Template.currentData().selected && 'is-selected',
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  static: () => Template.currentData().static && 'is-static'
})

bluzmaButton.register()

const bluzmaButtons = new Bluzma('Buttons', ['addons'])

bluzmaButtons.helpers({
  addons: () => Template.currentData().addons && 'has-addons'
})

bluzmaButtons.register()
