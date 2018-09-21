import { BluzmaComponent } from 'meteor/chap:bluzma/bluzma'

import './image.html'

BluzmaComponent.register('image', ['rounded', 'size', 'src'], {
  helpers: {
    rounded () { return this.data().rounded && `is-rounded` },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

BluzmaComponent.register('img', ['rounded'], {
  helpers: {
    rounded () { return this.data().rounded && `is-rounded` }
  }
})
