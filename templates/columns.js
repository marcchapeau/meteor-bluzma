import { Template } from 'meteor/templating'

import { mapAttributsToClass, mapAttributsToOthers } from '../helpers'

Template.bluzmaColumns.helpers({
  class () { return mapAttributsToClass(Template.currentData()) },
  others () { return mapAttributsToOthers(Template.currentData()) }
})

Template.bluzmaColumn.helpers({
  class () { return mapAttributsToClass(Template.currentData()) },
  others () { return mapAttributsToOthers(Template.currentData()) }
})
