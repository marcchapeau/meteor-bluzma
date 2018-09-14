import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './button.html'

// https://bulma.io/documentation/elements/button

const bluzmaButton = new Bluzma('Button', [
  'active', 'color', 'content', 'focused', 'fullwidth', 'hovered', 'inverted',
  'loading', 'outlined', 'rounded', 'selected', 'size', 'static'
])

bluzmaButton.hooks({
  created () {
    this.attributs = new ReactiveDict()
    this.autorun(() => {
      let loading = Template.currentData().loading
      if (typeof loading === 'undefined') loading = false
      this.attributs.set('loading', loading)
    })
  }
})

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
  loading: () => Template.instance().attributs.get('loading') && 'is-loading',
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

const bluzmaButtons = new Bluzma('Buttons', ['addons', 'centered', 'left', 'right'])

bluzmaButtons.helpers({
  addons: () => Template.currentData().addons && 'has-addons',
  centered: () => Template.currentData().centered && 'is-centered',
  left: () => Template.currentData().left && 'is-left',
  right: () => Template.currentData().right && 'is-right'
})

bluzmaButtons.register()
