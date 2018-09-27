import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './tag.html'

// https://bulma.io/documentation/elements/tag

// Tag

Bluzma.register('tag', ['content', 'delete'], {
  helpers: {
    color () {
      const color = this.data().color
      return color && `is-${color}`
    },
    delete () { return this.data().delete && 'is-delete' },
    deleteSize () {
      const size = this.data().size
      if (!size || size === 'medium') return 'is-small'
    },
    isA () {
      const data = this.data()
      return data.href || data.onClick
    },
    onDelete () { return !!this.data().onDelete },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

// Tags

Bluzma.register('tags', ['addons'], {
  helpers: {
    addons () { return this.data().addons && 'has-addons' }
  }
})
