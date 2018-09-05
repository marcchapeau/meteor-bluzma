import { Template } from 'meteor/templating'

import Bluzma from 'meteor/chap:bluzma/bluzma'

import './select.html'

const bluzmaSelect = new Bluzma('Select', [
  'multiple', 'size', 'color', 'rounded',
  'loading', 'fullwidth', 'expanded', 'iconsLeft',
  'focused', 'name', 'defaultOption'
])

bluzmaSelect.helpers({
  rounded: () => Template.currentData().rounded && `is-rounded`,
  iconsLeft: () => Template.currentData().iconLeft && 'has-icons-left',
  multiple: () => Template.currentData().multiple && 'is-multiple',
  loading: () => Template.currentData().loading && `is-loading`,
  fullwidth: () => Template.currentData().fullwidth && `is-fullwidth`,
  focused: () => Template.currentData().focused && `is-focused`,
  hovered: () => Template.currentData().hovered && `is-hovered`,
  color: () => {
    const color = Template.currentData().color
    return color && `is-${color}`
  },
  size: () => {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  expanded: () => Template.currentData().expanded && `is-expanded`
})

bluzmaSelect.register()

const bluzmaSelectOption = new Bluzma('SelectOption', [])

bluzmaSelectOption.register()
