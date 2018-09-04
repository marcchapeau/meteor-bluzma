import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './message.html'

// https://bulma.io/documentation/components/message

const bluzmaMessage = new Bluzma('Message', ['color', 'content', 'size'])

bluzmaMessage.helpers({
  color () {
    const color = Template.currentData().color
    return color && `is-${color}`
  },
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  }
})

bluzmaMessage.register()

const bluzmaMessageHeader = new Bluzma('MessageHeader', ['content', 'delete'])

bluzmaMessageHeader.register()

const bluzmaMessageBody = new Bluzma('MessageBody', ['content'])

bluzmaMessageBody.register()
