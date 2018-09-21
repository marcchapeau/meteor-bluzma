import { BluzmaComponent } from 'meteor/chap:bluzma/bluzma'

import './modal.html'

// https://bulma.io/documentation/components/modal

//  Modal

BluzmaComponent.register('modal', ['background'], {
  helpers: {
    background () {
      const bg = this.data().background
      return typeof bg === 'undefined' ? true : bg
    }
  }
})

//  Modal card

BluzmaComponent.register('modalCard')

//  Modal card head

BluzmaComponent.register('modalCardHead', ['content', 'delete'])

//  Modal card body

BluzmaComponent.register('modalCardBody')

//  Modal card foot

BluzmaComponent.register('modalCardFoot')
