import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './image.html'

const bluzmaImage = new Bluzma('Image', ['rounded', 'size', 'src'])

bluzmaImage.helpers({
  rounded () {
    const rounded = Template.currentData().rounded
    return rounded && `is-rounded`
  },
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  }
})

bluzmaImage.register()

const bluzmaImg = new Bluzma('Img', ['rounded'])

bluzmaImg.helpers({
  rounded () {
    const rounded = Template.currentData().rounded
    return rounded && `is-rounded`
  }
})

bluzmaImg.register()
