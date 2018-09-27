import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './table.html'

// https://bulma.io/documentation/elements/table

Bluzma.register('table', [
  'bordered', 'fullwidth', 'hoverable', 'narrow', 'responsive', 'striped'
], {
  helpers: {
    bordered () { return this.data().bordered && `is-bordered` },
    fullwidth () { return this.data().fullwidth && `is-fullwidth` },
    hoverable () { return this.data().hoverable && `is-hoverable` },
    narrow () { return this.data().narrow && `is-narrow` },
    striped () { return this.data().striped && `is-striped` }
  }
})

Bluzma.register('tableRow', ['selected'], {
  helpers: {
    selected () { return this.data().selected && `is-selected` }
  }
})

Bluzma.register('tableCell', ['selected'], {
  helpers: {
    selected () { return this.data().selected && `is-selected` }
  }
})

Bluzma.register('tableHead')

Bluzma.register('tableBody')

Bluzma.register('tableFoot')
