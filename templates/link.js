import Bluzma from 'meteor/chap:bluzma/bluzma'

import './link.html'

const bluzmaLink = new Bluzma('Link', ['content', 'href'])

bluzmaLink.register()
