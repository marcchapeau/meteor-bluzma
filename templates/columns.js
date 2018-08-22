import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

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

const bluzmaColumns = new Bluzma('Columns', [
  'centered', 'desktop', 'gapless', 'mobile', 'multiline', 'variable', 'vCentered'
])

bluzmaColumns.helpers({
  centered: () => Template.currentData().centered && 'is-centered',
  desktop: () => Template.currentData().desktop && 'is-desktop',
  gap: () => {
    const size = Template.currentData().gap
    if (typeof size !== 'undefined') return `is-variable is-${size}`
  },
  gapless: () => Template.currentData().gapless && 'is-gapless',
  mobile: () => Template.currentData().mobile && 'is-mobile',
  multiline: () => Template.currentData().multiline && 'is-multiline',
  vCentered: () => Template.currentData().vCentered && 'is-vCentered'
})

bluzmaColumns.register()

// Column

const bluzmaColumn = new Bluzma('Column', () => {
  const attributs = ['narrow', 'size']
  DEVICES.forEach(d => {
    attributs.push(`${d}Size`)
    attributs.push(`${d}Offset`)
  })
  return attributs
})

bluzmaColumn.helpers({
  narrow: () => {
    const device = Template.currentData().narrow
    if (typeof device !== 'undefined') return `is-narrow${device !== true && `-${device}`}`
  },
  offset: () => {
    const list = []
    const offset = Template.currentData().offset
    if (typeof offset !== 'undefined') list.push(`is-offset-${SIZES[offset]}`)
    DEVICES.forEach(d => {
      const name = `${d}Offset`
      const offset = Template.currentData()[name]
      if (typeof offset !== 'undefined') list.push(`is-offset-${SIZES[offset]}-${d}`)
    })
    return list.join(' ')
  },
  size: () => {
    const list = []
    const size = Template.currentData().size
    if (typeof size !== 'undefined') list.push(`is-${SIZES[size]}`)
    DEVICES.forEach(d => {
      const name = `${d}Size`
      const size = Template.currentData()[name]
      if (typeof size !== 'undefined') list.push(`is-${SIZES[size]}-${d}`)
    })
    return list.join(' ')
  }
})

bluzmaColumn.register()
