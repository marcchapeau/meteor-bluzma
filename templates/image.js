import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './image.html'

Bluzma.register('image', ['rounded', 'size', 'src'], {
  helpers: {
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
