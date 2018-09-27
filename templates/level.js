import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './level.html'

// https://bulma.io/documentation/layout/level

// Level

Bluzma.register('level', ['mobile'], {
  helpers: {
    mobile () { return this.data().mobile && 'is-mobile' }
  }
})

// Level left

Bluzma.register('levelLeft')

// Level right

Bluzma.register('levelRight')

// Level item

Bluzma.register('levelItem')
