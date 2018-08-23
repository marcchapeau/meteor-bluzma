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
  centered: 'centered', justified: 'justified', left: 'left', right: 'right'
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
  constructor (name, attributs = []) {
    const instance = this
    this.name = name
    attributs = typeof attributs === 'function' ? attributs.apply(null) : attributs
    this.attributs = ['onClick', ...attributs]
    this._hooks = {}
    this._helpers = {
      class: function () {
        const data = Template.currentData()
        const res = `${Object.keys(data).filter(key => classes[key])
          .map(key => classes[key](data[key])).join(' ')}${data.class ? ` ${data.class}` : ''}`
        return res
      },
      others: function () {
        const attributs = instance.attributs
        const data = Template.currentData()
        const res = Object.keys(data).filter(key => {
          return !classes[key] && !attributs.includes(key) && key !== 'class'
        }).reduce((others, key) => {
          others[key] = data[key]
          return others
        }, {})
        return res
      }
    }
    this._events = {
      'click' (tpl, evt) {
        const onClick = Template.currentData().onClick
        if (onClick) onClick.call(this, tpl, evt)
      }
    }
  }
  hooks (hooks) { this._hooks = {...this._hooks, ...hooks} }
  helpers (helpers) { this._helpers = {...this._helpers, ...helpers} }
  events (events) { this._events = {...this._events, ...events} }
  register () {
    const instance = this
    const name = `bluzma${this.name}`
    Template[name].onCreated(function () {
      if (instance._hooks.created) instance._hooks.created.call(this)
    })
    Template[name].onRendered(function () {
      if (instance._hooks.rendered) instance._hooks.rendered.call(this)
    })
    Template[name].onDestroyed(function () {
      if (instance._hooks.destroyed) instance._hooks.destroyed.call(this)
    })
    Template[name].helpers(this._helpers)
    Template[name].events(this._events)
  }
}

export default Bluzma
