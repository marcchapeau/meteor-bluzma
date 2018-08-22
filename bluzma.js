import { Template } from 'meteor/templating'

const DISPLAYS = {
  block: 'block',
  flex: 'flex',
  inline: 'inline',
  inlineBlock: 'inline-block',
  inlineFlex: 'inline-flex'
}
const DEVICES = {
  mobile: 'mobile',
  tabletOnly: 'tablet-only',
  desktopOnly: 'desktop-only',
  widescreenOnly: 'widescreen-only',
  touch: 'touch',
  tablet: 'tablet',
  desktop: 'desktop',
  widescreen: 'widescreen',
  fullhd: 'fullhd'
}
const COLORS = {
  white: 'white',
  black: 'black',
  light: 'light',
  dark: 'dark',
  primary: 'primary',
  info: 'info',
  link: 'link',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  blackBis: 'black-bis',
  blackTer: 'black-ter',
  greyDarker: 'grey-darker',
  greyDark: 'grey-dark',
  grey: 'grey',
  greyLight: 'grey-light',
  greyLighter: 'grey-lighter',
  whiteTer: 'white-ter',
  whiteBis: 'white-bis'
}
const SIZES = [1, 2, 3, 4, 5, 6, 7]
const ALIGNMENTS = {
  center: 'centered', justify: 'justified', left: 'left', right: 'right'
}

const classes = {}
// HELPERS
  // Float
classes.clearfix = () => 'is-clearfix'
classes.pulled = (side) => `is-pulled-${side}`
  // Spacing
classes.marginless = () => 'is-marginless'
classes.paddingless = () => 'is-paddingless'
  // Other
classes.overlay = () => 'is-overlay'
classes.clipped = () => 'is-clipped'
classes.radiusless = () => 'is-radiusless'
classes.shadowless = () => 'is-shadowless'
classes.unselectable = () => 'is-unselectable'
classes.invisible = () => 'is-invisible'
classes.srOnly = () => 'is-sr-only'
// RESPONSIVE HELPERS
  // Show
for (let d in DISPLAYS) {
  classes[d] = (device) => `is-${device === true ? DISPLAYS[d] : `${DISPLAYS[d]}-${DEVICES[device]}`}`
}
  // Hidden
classes.hidden = (device) => `is-hidden${device === true ? '' : `-${DEVICES[device]}`}`
// COLOR HELPERS
  // Text
classes.textColor = (color) => `has-text-${COLORS[color]}`
  // Background
classes.bgColor = (color) => `has-background-${COLORS[color]}`
// TYPOGRAPHY HELPERS
  // Size
for (let s in SIZES) {
  classes[`textSize${s}`] = (device) => `is-size-${device === true ? s : `${s}-${DEVICES[device]}`}`
}
  // Alignment
for (let a in ALIGNMENTS) {
  const name = `text${a.charAt(0).toUpperCase() + a.slice(1)}`
  classes[name] = (device) => `has-text-${device === true ? ALIGNMENTS[a] : `${ALIGNMENTS[a]}-${DEVICES[device]}`}`
}
  // Transformation
classes.capitalized = () => 'is-capitalized'
classes.lowercase = () => 'is-lowercase'
classes.uppercase = () => 'is-uppercase'
classes.italic = () => 'is-italic'
  // Weight
classes.textWeight = (weight) => `has-text-weight-${weight}`

class Bluzma {
  constructor (name, attributs) {
    this.name = name
    attributs = typeof attributs === 'function' ? attributs.apply(null) : attributs
    this.attributs = attributs
    this._hooks = {}
    this._helpers = {
      class: function () {
        const data = Template.currentData()
        return `${Object.keys(data).filter(key => classes[key])
          .map(key => classes[key](data[key])).join(' ')}${data.class ? ` ${data.class}` : ''}`
      },
      others: function () {
        const data = Template.currentData()
        return Object.keys(data).filter(key => {
          return !classes[key] && !attributs.includes(key) && key !== 'class'
        }).reduce((others, key) => {
          others[key] = data[key]
          return others
        }, {})
      }
    }
    this._events = {
    }
  }
  hooks (hooks) { this._hooks = {...this._hooks, ...hooks} }
  helpers (helpers) {
    this._helpers = {...this._helpers, ...helpers}
    console.log(this.name, this._helpers)
  }
  events (events) { this._events = {...this._events, ...events} }
  register () {
    const self = this
    const name = `bluzma${this.name}`
    Template[name].onCreated(function () {
      if (self._hooks.created) self._hooks.created.apply(this)
    })
    Template[name].onRendered(function () {
      if (self._hooks.rendered) self._hooks.rendered.apply(this)
    })
    Template[name].onDestroyed(function () {
      if (self._hooks.destroyed) self._hooks.destroyed.apply(this)
    })
    Template[name].helpers(this._helpers)
    Template[name].events(this._events)
  }
}

export default Bluzma
