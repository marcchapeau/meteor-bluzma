import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './tabs.html'

// https://bulma.io/documentation/components/tabs

// Tabs

Bluzma.register('tabs', [
  'boxed', 'centered', 'right', 'size', 'fullwidth', 'toggle', 'toggleRounded'
], {
  helpers: {
    boxed () { return this.data().boxed && `is-boxed` },
    centered () { return this.data().centered && `is-centered` },
    fullwidth () { return this.data().fullwidth && `is-fullwidth` },
    right () { return this.data().right && `is-right` },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    },
    toggle () { return this.data().toggle && `is-toggle` },
    toggleRounded () { return this.data().toggleRounded && `is-toggle-rounded` }
  }
})

// Tab

Bluzma.register('tab', ['active'], {
  helpers: {
    active () { return this.data().active && `is-active` }
  }
})
