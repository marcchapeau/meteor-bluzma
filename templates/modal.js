import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './modal.html'

// https://bulma.io/documentation/components/modal

//  Modal

const bluzmaModal = new Bluzma('Modal', ['background'])

bluzmaModal.helpers({
  background: () => {
    const bg = Template.currentData().background
    return typeof bg === 'undefined' ? true : bg
  }
})

bluzmaModal.register()

//  Modal card

const bluzmaModalCard = new Bluzma('ModalCard')

bluzmaModalCard.register()

//  Modal card head

const bluzmaModalCardHead = new Bluzma('ModalCardHead', ['content', 'delete'])

bluzmaModalCardHead.register()

//  Modal card body

const bluzmaModalCardBody = new Bluzma('ModalCardBody')

bluzmaModalCardBody.register()

//  Modal card foot

const bluzmaModalCardFoot = new Bluzma('ModalCardFoot')

bluzmaModalCardFoot.register()
