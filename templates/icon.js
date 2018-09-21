import { BluzmaComponent } from 'meteor/chap:bluzma/bluzma'

import './icon.html'

// https://bulma.io/documentation/elements/icon

BluzmaComponent.register('icon', ['icon', 'size'], {
  helpers: {
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})
