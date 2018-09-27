import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './card.html'

// https://bulma.io/documentation/components/card

//  Card

Bluzma.register('card')

// Card image

Bluzma.register('cardImage')

// Card header

Bluzma.register('cardHeader')

// Card header title

Bluzma.register('cardHeaderTitle', ['content'])

// Card header icon

Bluzma.register('cardHeaderIcon', ['icon'])

// Card content

Bluzma.register('cardContent')

// Card footer

Bluzma.register('cardFooter')

// Card footer item

Bluzma.register('cardFooterItem', ['content', 'href'], {
  helpers: {
    isA () {
      const data = this.data()
      return data.href || data.onClick
    }
  }
})
