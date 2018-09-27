import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './breadcrumb.html'

// https://bulma.io/documentation/components/breadcrumb

// Breadcrumb

Bluzma.register('breadcrumb')

// Breadcrumb item

Bluzma.register('breadcrumbItem', ['active', 'content', 'href'], {
  helpers: {
    active () { return this.data().active && 'is-active' }
  }
})
