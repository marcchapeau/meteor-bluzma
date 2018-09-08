import { Template } from 'meteor/templating'

import Bluzma from 'meteor/chap:bluzma/bluzma'

const bluzmaTabs = new Bluzma('Tabs', [
  'centered', 'right', 'size', 'fullwidth', 'toggle',
  'boxed', 'toggleRounded'
])

bluzmaTabs.helpers({
  size: () => {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  centered: () => Template.currentData().centered && `is-centered`,
  right: () => Template.currentData().right && `is-right`,
  fullwidth: () => Template.currentData().fullwidth && `is-fullwidth`,
  toggle: () => Template.currentData().toggle && `is-toggle`,
  boxed: () => Template.currentData().boxed && `is-boxed`,
  toggleRounded: () => Template.currentData().toggleRounded && `is-toggle-rounded`
})

const bluzmaTab = new Bluzma('Tab', [
  'active'
])

bluzmaTab.helpers({
  active: () => Template.currentData().active && `is-active`
})

bluzmaTabs.register()
bluzmaTab.register()
