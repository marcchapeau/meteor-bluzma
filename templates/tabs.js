import { Template } from 'meteor/templating'

import { mapAttributsToClass, mapAttributsToOthers } from '../helpers'

const tabAttributs = [
  'href',
  'label'
]

const tabsAttributs = []

Template.bluzmaTabs.helpers({
  class () { return mapAttributsToClass(Template.currentData()) },
  others () { return mapAttributsToOthers(Template.currentData(), tabsAttributs) }
})

Template.bluzmaTab.helpers({
  class () { return mapAttributsToClass(Template.currentData()) },
  others () { return mapAttributsToOthers(Template.currentData(), tabAttributs) }
})
