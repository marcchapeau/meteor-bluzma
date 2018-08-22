import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './title.html'

// https://bulma.io/documentation/elements/title

// Title

const bluzmaTitle = new Bluzma('Title', ['content', 'size', 'spaced'])

bluzmaTitle.helpers({
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  spaced: () => Template.currentData().spaced && 'is-spaced'
})

bluzmaTitle.register()

// Subtitle

const bluzmaSubtitle = new Bluzma('Subtitle', ['content', 'size', 'spaced'])

bluzmaSubtitle.helpers({
  size () {
    const size = Template.currentData().size
    return size && `is-${size}`
  },
  spaced: () => Template.currentData().spaced && 'is-spaced'
})

bluzmaSubtitle.register()
