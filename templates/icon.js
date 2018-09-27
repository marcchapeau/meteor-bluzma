import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './icon.html'

// https://bulma.io/documentation/elements/icon

Bluzma.register('icon', ['icon', 'size'], {
  helpers: {
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})
