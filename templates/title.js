import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './title.html'

// https://bulma.io/documentation/elements/title

// Title

Bluzma.register('title', ['content', 'size', 'spaced'], {
  helpers: {
    size () {
      const size = this.data().size
      return size && `is-${size}`
    },
    spaced () { return this.data().spaced && 'is-spaced' }
  }
})

// Subtitle

Bluzma.register('subtitle', ['content', 'size', 'spaced'], {
  helpers: {
    size () {
      const size = this.data().size
      return size && `is-${size}`
    },
    spaced () { return this.data().spaced && 'is-spaced' }
  }
})
