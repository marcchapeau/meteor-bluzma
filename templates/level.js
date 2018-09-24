import { BluzmaComponent } from 'meteor/chap:bluzma/bluzma'

import './level.html'

// https://bulma.io/documentation/layout/level

// Level

BluzmaComponent.register('lvl', ['mobile'], {
  helpers: {
    mobile () { return this.data().mobile && 'is-mobile' }
  }
})

// Level left

BluzmaComponent.register('lvlL')

// Level right

BluzmaComponent.register('lvlR')

// Level item

BluzmaComponent.register('lvlI')
