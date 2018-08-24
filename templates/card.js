import Bluzma from 'meteor/chap:bluzma/bluzma'

import './card.html'

// https://bulma.io/documentation/components/card

//  Card

const bluzmaCard = new Bluzma('Card')

bluzmaCard.register()

// Card image

const bluzmaCardImage = new Bluzma('CardImage')

bluzmaCardImage.register()

// Card header

const bluzmaCardHeader = new Bluzma('CardHeader')

bluzmaCardHeader.register()

// Card header title

const bluzmaCardHeaderTitle = new Bluzma('CardHeaderTitle', ['content'])

bluzmaCardHeaderTitle.register()

// Card header icon

const bluzmaCardHeaderIcon = new Bluzma('CardHeaderIcon', ['icon'])

bluzmaCardHeaderIcon.register()

// Card content

const bluzmaCardContent = new Bluzma('CardContent')

bluzmaCardContent.register()

// Card footer

const bluzmaCardFooter = new Bluzma('CardFooter')

bluzmaCardFooter.register()

// Card footer item

const bluzmaCardFooterItem = new Bluzma('CardFooterItem', ['href'])

bluzmaCardFooterItem.register()
