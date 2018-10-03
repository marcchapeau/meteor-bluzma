import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './image.html'

Bluzma.register('image', ['ratio', 'rounded', 'size', 'src'], {
  helpers: {
    ratio () {
      const ratio = this.data().ratio
      return ratio && `is-${ratio}`
    },
    rounded () { return this.data().rounded && `is-rounded` },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

Bluzma.register('img', ['rounded'], {
  helpers: {
    rounded () { return this.data().rounded && `is-rounded` }
  }
})
