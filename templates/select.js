import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './select.html'

Bluzma.register('select', [
  'color', 'defaultOption', 'expanded', 'focused', 'fullwidth', 'hovered',
  'iconsLeft', 'loading', 'multiple', 'name', 'options', 'rounded', 'size'
], {
  helpers: {
    color () {
      const color = this.data().color
      return color && `is-${color}`
    },
    expanded () { return this.data().expanded && `is-expanded` },
    focused () { return this.data().focused && `is-focused` },
    fullwidth () { return this.data().fullwidth && `is-fullwidth` },
    hovered () { return this.data().hovered && `is-hovered` },
    iconsLeft () { return this.data().iconLeft && 'has-icons-left' },
    loading () { return this.data().loading && `is-loading` },
    multiple () { return this.data().multiple && 'is-multiple' },
    rounded () { return this.data().rounded && `is-rounded` },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    }
  }
})

Bluzma.register('selectOption')
