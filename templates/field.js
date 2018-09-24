import { BluzmaComponent } from 'meteor/chap:bluzma/bluzma'

import './field.html'

// https://bulma.io/documentation/form/general

BluzmaComponent.register('field', [
  'addons', 'grouped', 'groupedMultiline', 'horizontal'
], {
  helpers: {
    addons () {
      const addons = this.data().addons
      return addons && `has-addons${addons === true ? '' : ` has-addons-${addons}`}`
    },
    grouped () {
      const grouped = this.data().grouped
      return grouped && `is-grouped${grouped === true ? '' : ` is-grouped-${grouped}`}`
    },
    groupedMultiline () {
      return this.data().groupedMultiline && `is-grouped-multiline`
    },
    horizontal () {
      return this.data().horizontal && `is-horizontal`
    }
  }
})

BluzmaComponent.register('fieldLabel', ['content', 'size'], {
  helpers: {
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

BluzmaComponent.register('label', ['content', 'size'], {
  helpers: {
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

BluzmaComponent.register('fieldBody', ['content'])

BluzmaComponent.register('fieldControl', ['addons'], {
  helpers: {
    addons () {
      const addons = this.data().addons
      return addons && `has-addons`
    }
  }
})
