import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './table.html'

// https://bulma.io/documentation/elements/table

const bluzmaTable = new Bluzma('Table', [
  'bordered', 'fullwidth', 'hoverable', 'narrow', 'responsive', 'striped'
])

bluzmaTable.helpers({
  bordered () {
    const bordered = Template.currentData().bordered
    return bordered && `is-${bordered}`
  },
  fullwidth () {
    const fullwidth = Template.currentData().fullwidth
    return fullwidth && `is-${fullwidth}`
  },
  hoverable () {
    const hoverable = Template.currentData().hoverable
    return hoverable && `is-${hoverable}`
  },
  narrow () {
    const narrow = Template.currentData().narrow
    return narrow && `is-${narrow}`
  },
  striped () {
    const striped = Template.currentData().striped
    return striped && `is-${striped}`
  }
})

bluzmaTable.register()

const bluzmaTableRow = new Bluzma('TableRow', ['selected'])

bluzmaTableRow.helpers({
  selected () {
    const selected = Template.currentData().selected
    return selected && `is-${selected}`
  }
})

bluzmaTableRow.register()

const bluzmaTableHead = new Bluzma('TableHead')

bluzmaTableHead.register()

const bluzmaTableBody = new Bluzma('TableBody')

bluzmaTableBody.register()

const bluzmaTableFoot = new Bluzma('TableFoot')

bluzmaTableFoot.register()
