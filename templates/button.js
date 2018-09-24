import { BluzmaComponent } from 'meteor/chap:bluzma/bluzma'

import './button.html'

// https://bulma.io/documentation/elements/button

BluzmaComponent.register('button', [
  'active', 'color', 'content', 'focused', 'fullwidth', 'hovered', 'inverted',
  'loading', 'outlined', 'rounded', 'selected', 'size', 'static'
], {
  hooks: {
    created () {
      this.autorun(() => { this.setState('active', this.getProps('active')) })
      this.autorun(() => { this.setState('color', this.getProps('color')) })
      this.autorun(() => { this.setState('focused', this.getProps('focused')) })
      this.autorun(() => { this.setState('fullwidth', this.getProps('fullwidth')) })
      this.autorun(() => { this.setState('hovered', this.getProps('hovered')) })
      this.autorun(() => { this.setState('inverted', this.getProps('inverted')) })
      this.autorun(() => { this.setState('loading', this.getProps('loading')) })
      this.autorun(() => { this.setState('outlined', this.getProps('outlined')) })
      this.autorun(() => { this.setState('rounded', this.getProps('rounded')) })
      this.autorun(() => { this.setState('selected', this.getProps('selected')) })
      this.autorun(() => { this.setState('size', this.getProps('size')) })
      this.autorun(() => { this.setState('static', this.getProps('static')) })
    }
  },
  helpers: {
    active () { return this.getState('active') && 'is-active' },
    color () {
      const color = this.getState('color')
      return color && `is-${color}`
    },
    focused () { return this.getState('focused') && 'is-focused' },
    fullwidth () { return this.getState('fullwidth') && 'is-fullwidth' },
    hovered () { return this.getState('hovered') && 'is-hovered' },
    inverted () { return this.getState('inverted') && 'is-inverted' },
    loading () { return this.getState('loading') && 'is-loading' },
    outlined () { return this.getState('outlined') && 'is-outlined' },
    rounded () { return this.getState('rounded') && 'is-rounded' },
    selected () { return this.getState('selected') && 'is-selected' },
    size () {
      const size = this.getState('size')
      return size && `is-${size}`
    },
    static () { return this.getState('active') && 'is-static' }
  }
})

BluzmaComponent.register('buttons', [
  'addons', 'centered', 'left', 'right'
], {
  hooks: {
    created () {
      this.autorun(() => { this.setState('addons', this.getProps('addons')) })
      this.autorun(() => { this.setState('centered', this.getProps('centered')) })
      this.autorun(() => { this.setState('left', this.getProps('left')) })
      this.autorun(() => { this.setState('right', this.getProps('right')) })
    }
  },
  helpers: {
    addons () { return this.getState('addons') && 'has-addons' },
    centered () { return this.getState('centered') && 'is-centered' },
    left () { return this.getState('left') && 'is-left' },
    right () { return this.getState('right') && 'is-right' }
  }
})
