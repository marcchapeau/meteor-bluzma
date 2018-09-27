import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './message.html'

// https://bulma.io/documentation/components/message

Bluzma.register('message', ['color', 'content', 'size'], {
  helpers: {
    color () {
      const color = this.data().color
      return color && `is-${color}`
    },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

Bluzma.register('messageHeader', ['content', 'delete'])

Bluzma.register('messageBody', ['content'])
