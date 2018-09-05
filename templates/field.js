import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './field.html'

// https://bulma.io/documentation/form/general

const bluzmaField = new Bluzma('Field', ['addons', 'grouped', 'groupedMultiline', 'horizontal'])

bluzmaField.helpers({
  addons: () => {
    const addons = Template.currentData().addons
    return addons && `has-addons${addons === true ? '' : ` has-addons-${addons}`}`
  },
  grouped: () => {
    const grouped = Template.currentData().grouped
    return grouped && `is-grouped${grouped === true ? '' : ` is-grouped-${grouped}`}`
  },
  groupedMultiline: () => Template.currentData().groupedMultiline && `is-grouped-multiline`,
  horizontal: () => Template.currentData().horizontal && `is-horizontal`
})

bluzmaField.register()

const bluzmaFieldLabel = new Bluzma('FieldLabel', ['content', 'size'])

bluzmaFieldLabel.helpers({
  size: () => {
    const size = Template.currentData().size
    return size && `is-${size}`
  }
})

bluzmaFieldLabel.register()

const bluzmaLabel = new Bluzma('Label', ['content', 'size'])

bluzmaLabel.helpers({
  size: () => {
    const size = Template.currentData().size
    return size && `is-${size}`
  }
})

bluzmaLabel.register()

const bluzmaFieldBody = new Bluzma('FieldBody', ['content'])

bluzmaFieldBody.register()

const bluzmaFieldControl = new Bluzma('FieldControl')

bluzmaFieldControl.helpers({
  addons: () => {
    const addons = Template.currentData().addons
    return addons && `has-addons`
  }
})

bluzmaFieldControl.register()
