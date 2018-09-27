import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './switch.html'

// https://wikiki.github.io/form/switch

// Switch

Bluzma.register('switch', [
  'checked', 'color', 'disabled', 'id', 'name', 'outlined', 'rounded', 'rtl',
  'size', 'thin'
], {
  helpers: {
    checked () { return this.data().checked && 'checked' },
    color () {
      const color = this.data().color
      return color && `is-${color}`
    },
    disabled () { return this.data().disabled && 'disabled' },
    outlined () { return this.data().outlined && 'is-outlined' },
    rounded () { return this.data().rounded && 'is-rounded' },
    rtl () { return this.data().rtl && 'is-rtl' },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    },
    thin () { return this.data().thin && 'is-thin' }
  }
})
