import { Bluzma } from 'meteor/chap:bluzma/bluzma'

import './columns.html'

// https://bulma.io/documentation/elements/columns

const DEVICES = ['mobile', 'tablet', 'touch', 'desktop', 'widescreen', 'fullhd']
const SIZES = {
  '1/2': 'half',
  '1/3': 'one-third',
  '2/3': 'two-thirds',
  '1/4': 'one-quarter',
  '3/4': 'three-quarters',
  '1/5': 'one-fifth',
  '2/5': 'two-fifths',
  '3/5': 'three-fifths',
  '4/5': 'four-fifths',
  full: 'full'
}
for (let n = 0; n <= 12; n++) SIZES[n] = `${n}`

// Columns

Bluzma.register('columns', [
  'centered', 'desktop', 'gapless', 'mobile', 'multiline', 'variable',
  'vCentered'
], {
  helpers: {
    centered () { return this.data().centered && 'is-centered' },
    desktop () { return this.data().desktop && 'is-desktop' },
    gap () {
      const size = this.data().gap
      if (typeof size !== 'undefined') return `is-variable is-${size}`
    },
    gapless () { return this.data().gapless && 'is-gapless' },
    mobile () { return this.data().mobile && 'is-mobile' },
    multiline () { return this.data().multiline && 'is-multiline' },
    vCentered () { return this.data().vCentered && 'is-vCentered' }
  }
})

// Column

const columnAttributs = ['narrow', 'offset', 'size']
DEVICES.forEach(d => {
  columnAttributs.push(`${d}Size`)
  columnAttributs.push(`${d}Offset`)
})

Bluzma.register('column', columnAttributs, {
  helpers: {
    narrow () {
      const device = this.data().narrow
      if (typeof device !== 'undefined') {
        return `is-narrow${device === true ? '' : `-${device}`}`
      }
    },
    offset () {
      const data = this.data()
      const offset = data.offset
      const list = []
      if (typeof offset !== 'undefined') list.push(`is-offset-${SIZES[offset]}`)
      DEVICES.forEach(d => {
        const offset = data[`${d}Offset`]
        if (typeof offset !== 'undefined') {
          list.push(`is-offset-${SIZES[offset]}-${d}`)
        }
      })
      return list.join(' ')
    },
    size () {
      const data = this.data()
      const size = data.size
      const list = []
      if (typeof size !== 'undefined') list.push(`is-${SIZES[size]}`)
      DEVICES.forEach(d => {
        const size = data[`${d}Size`]
        if (typeof size !== 'undefined') list.push(`is-${SIZES[size]}-${d}`)
      })
      return list.join(' ')
    }
  }
})
