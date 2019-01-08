import { ReactiveVar } from 'meteor/reactive-var'
import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './button.html'

// https://bulma.io/documentation/elements/button

// Button

Bluzma.register('button', [
  'active', 'color', 'content', 'focused', 'fullwidth', 'hovered', 'inverted',
  'loading', 'outlined', 'rounded', 'selected', 'size', 'static', 'disabled'
], {
  hooks: {
    created () {
      this.set('disabled', new ReactiveVar(false))
      this.disabled = disabled => {
        if (typeof disabled === 'undefined') return this.get('disabled').get()
        this.get('disabled').set(disabled || false)
      }
      this.autorun(() => {
        const data = this.data()
        this.get('disabled').set(data.disabled)
      })
      this.set('loading', new ReactiveVar(false))
      this.loading = (loading) => {
        if (typeof loading === 'undefined') return this.get('loading').get()
        this.get('loading').set(loading || false)
      }
      this.autorun(() => {
        const data = this.data()
        this.get('loading').set(data.loading)
      })
    }
  },
  events: {
    'click' (e) {
      if (this.disabled()) return
      const onClick = this.data().onClick
      if (onClick) onClick.call(this, e)
    }
  },
  helpers: {
    active () { return this.data().active && 'is-active' },
    color () {
      const color = this.data().color
      return color && `is-${color}`
    },
    disabled () { return this.get('disabled').get() ? { disabled: 'disabled' } : {} },
    focused () { return this.data().focused && 'is-focused' },
    fullwidth () { return this.data().fullwidth && 'is-fullwidth' },
    hovered () { return this.data().hovered && 'is-hovered' },
    inverted () { return this.data().inverted && 'is-inverted' },
    loading () { return this.get('loading').get() && 'is-loading' },
    outlined () { return this.data().outlined && 'is-outlined' },
    rounded () { return this.data().rounded && 'is-rounded' },
    selected () { return this.data().selected && 'is-selected' },
    size () {
      const size = this.data().size
      return size && `is-${size}`
    },
    static () { return this.data().active && 'is-static' }
  }
})

// Buttons

Bluzma.register('buttons', ['addons', 'centered', 'left', 'right'], {
  helpers: {
    addons () { return this.data().addons && 'has-addons' },
    centered () { return this.data().centered && 'is-centered' },
    left () { return this.data().left && 'is-left' },
    right () { return this.data().right && 'is-right' }
  }
})
