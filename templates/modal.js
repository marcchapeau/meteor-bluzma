import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './modal.html'

// https://bulma.io/documentation/components/modal

//  Modal

Bluzma.register('modal', ['background'], {
  helpers: {
    background () {
      const bg = this.data().background
      return typeof bg === 'undefined' ? true : bg
    }
  }
})

//  Modal card

Bluzma.register('modalCard')

//  Modal card head

Bluzma.register('modalCardHead', ['content', 'delete'])

//  Modal card body

Bluzma.register('modalCardBody')

//  Modal card foot

Bluzma.register('modalCardFoot')
