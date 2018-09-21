import { EJSON } from 'meteor/ejson'
import { ReactiveDict } from 'meteor/reactive-dict'
import { ReactiveVar } from 'meteor/reactive-var'
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

const CLASS = {}
// HELPERS
// Float
CLASS.clearfix = () => 'is-clearfix'
CLASS.pulled = (side) => `is-pulled-${side}`
// Spacing
CLASS.marginless = () => 'is-marginless'
CLASS.paddingless = () => 'is-paddingless'
// Other
CLASS.overlay = () => 'is-overlay'
CLASS.clipped = () => 'is-clipped'
CLASS.radiusless = () => 'is-radiusless'
CLASS.shadowless = () => 'is-shadowless'
CLASS.unselectable = () => 'is-unselectable'
CLASS.invisible = () => 'is-invisible'
CLASS.srOnly = () => 'is-sr-only'
// RESPONSIVE HELPERS
// Show
for (let d in DISPLAYS) {
  CLASS[d] = (device) => `is-${device === true ? DISPLAYS[d] : `${DISPLAYS[d]}-${DEVICES[device]}`}`
}
// Hidden
CLASS.hidden = (device) => `is-hidden${device === true ? '' : `-${DEVICES[device]}`}`
// COLOR HELPERS
// Text
CLASS.textColor = (color) => `has-text-${COLORS[color]}`
// Background
CLASS.bgColor = (color) => `has-background-${COLORS[color]}`
// TYPOGRAPHY HELPERS
// Size
for (let s in SIZES) {
  CLASS[`textSize${s}`] = (device) => `is-size-${device === true ? s : `${s}-${DEVICES[device]}`}`
}
// Alignment
for (let a in ALIGNMENTS) {
  const name = `text${a.charAt(0).toUpperCase() + a.slice(1)}`
  CLASS[name] = (device) => `has-text-${device === true ? ALIGNMENTS[a] : `${ALIGNMENTS[a]}-${DEVICES[device]}`}`
}
// Transformation
CLASS.capitalized = () => 'is-capitalized'
CLASS.lowercase = () => 'is-lowercase'
CLASS.uppercase = () => 'is-uppercase'
CLASS.italic = () => 'is-italic'
// Weight
CLASS.textWeight = (weight) => `has-text-weight-${weight}`

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
        const res = `${Object.keys(data).filter(key => CLASS[key])
          .map(key => CLASS[key](data[key])).join(' ')}${data.class ? ` ${data.class}` : ''}`
        return res
      },
      others: function () {
        const attributs = instance.attributs
        const data = Template.currentData()
        const res = Object.keys(data).filter(key => {
          return !CLASS[key] && !attributs.includes(key) && key !== 'class'
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
        if (onClick) onClick.call(instance, tpl, evt)
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

export class BluzmaComponent {
  constructor (name, attributs) {
    this.attributs = ['onClick', ...attributs]
    this.dataContext = new ReactiveVar(undefined, (a, b) => {
      return EJSON.equals(a, b)
    })
    this.name = name
    this.state = new ReactiveDict()
  }
  class () {
    const data = this.data()
    const globals = Object.keys(data).filter(key => !!CLASS[key]).map(key => {
      return CLASS[key](data[key])
    }).join(' ')
    return `${globals}${globals && data.class ? ' ' : ''}${data.class || ''}`
  }
  currentData () { return Template.currentData() }
  data () { return this.dataContext.get() }
  autorun (func) { this.template.autorun(func) }
  getState (key) { return this.state.get(key) }
  others () {
    const data = this.data()
    return Object.keys(data).filter(key => {
      return !CLASS[key] && !this.attributs.includes(key) && key !== 'class'
    }).reduce((others, key) => {
      others[key] = data[key]
      return others
    }, {})
  }
  setState (key, value) { this.state.set(key, value) }
  static register (name, attributs = [], options = {}) {
    const Component = this
    Template[name].onCreated(function () {
      this.component = new Component(name, attributs)
      this.component.template = this
      this.component.autorun(() => {
        this.component.dataContext.set(Template.currentData())
      })
    })
    Template[name].onRendered(function () {
      if (options.hooks && options.hooks.rendered) {
        options.hooks.rendered.call(this.component)
      }
    })
    Template[name].onDestroyed(function () {
      if (options.hooks && options.hooks.destroyed) {
        options.hooks.destroyed.call(this.component)
      }
    })
    options.helpers = {
      ...options.helpers,
      class () { return this.class() },
      component () { return this },
      currentData () { return this.currentData() },
      data () { return this.data() },
      others () { return this.others() },
      state (key) { return this.getState(key) }
    }
    const helpers = {}
    for (let key in options.helpers) {
      helpers[key] = function (...args) {
        return options.helpers[key].call(Template.instance().component, ...args)
      }
    }
    Template[name].helpers(helpers)
    options.events = {
      ...options.events,
      'click' (evt, tpl) {
        const onClick = this.data().onClick
        if (onClick) onClick.call(this, evt)
      }
    }
    const events = {}
    for (let key in options.events) {
      events[key] = function (event, instance) {
        options.events[key].call(instance.component, event)
      }
    }
    Template[name].events(events)
  }
}
