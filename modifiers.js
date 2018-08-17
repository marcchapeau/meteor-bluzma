const literralSize = [
  'small',
  'large',
  'medium'
]

const weights = [
  'weight-light',
  'weight-normal',
  'weight-semibold',
  'weight-bold'
]

const aligns = [
  'left',
  'justified',
  'centered',
  'right'
]

const mixins = [
  'mobile',
  'tablet',
  'desktop',
  'widescreen',
  'fullhd',
  'touch',
  'tablet-only',
  'desktop-only',
  'widescreen-only'
]

const colors = [
  'white',
  'black',
  'light',
  'dark',
  'secondary',
  'primary',
  'info',
  'link',
  'success',
  'warning',
  'danger',
  'black-bis',
  'black-ter',
  'grey-darker',
  'grey-dark',
  'grey',
  'grey-light',
  'grey-lighter',
  'white-ter',
  'white-bis'
]

const simpleModifiers = [
  'clearfix',
  'marginless',
  'paddingless',
  'overlay',
  'clipped',
  'radiusless',
  'shadowless',
  'unselectable',
  'invisible',
  'sr-only',
  'capitalized',
  'lowercase',
  'uppercase',
  'italic',
  'multiline',
  'centered',
  'gapless',
  'focused',
  'fullwidth',
  'hovered',
  'inverted',
  'loading',
  'outlined',
  'rounded',
  'static',
  'delete',
  'horizontal',
  'grouped',
  'striped',
  'hoverable',
  'expanded',
  'active'
]

const simpleHasModifiers = [
  'addons'
]

const elements = {
  colors,
  mixins,
  aligns,
  weights,
  simpleModifiers,
  simpleHasModifiers,
  literralSize
}

const modifiers = {
  hasBackground: {
    prefix: 'has-background',
    params: ['colors']
  },
  hasText: {
    prefix: `has-text`,
    params: ['colors', {type: 'aligns', childs: ['mixins']}]
  },
  isSize: {
    prefix: 'is-size',
    params: ['default', 'mixins']
  },
  isPulled: {
    prefix: 'is-pulled',
    params: ['aligns'],
    exclude: ['centered', 'justified']
  },
  has: {
    prefix: 'has',
    params: ['simpleHasModifiers']
  },
  is: {
    prefix: 'is',
    params: ['mixins', 'simpleModifiers', 'colors', 'default', 'literralSize']
  },
  isOffset: {
    prefix: 'is-offset',
    params: ['mixins', 'default']
  },
  isNarrow: {
    prefix: 'is-narrow',
    params: ['mixins', 'default']
  },
  isHidden: {
    prefix: 'is-hidden',
    params: ['mixins', 'default']
  },
  isFlex: {
    prefix: 'is-flex',
    params: ['mixins', 'default']
  },
  isBlock: {
    prefix: 'is-block',
    params: ['mixins', 'default']
  },
  isInline: {
    prefix: 'is-inline',
    params: ['mixins', 'default']
  },
  isInlineBlock: {
    prefix: 'is-inline-block',
    params: ['mixins', 'default']
  },
  isInlineFlex: {
    prefix: 'is-inline-flex',
    params: ['mixins', 'default']
  },
  color: {
    prefix: 'is',
    params: ['default']
  },
  class: {
    prefix: null,
    params: ['default']
  }
}

const objectToArray = obj => Object.keys(obj)
  .map(k => ({key: k, value: obj[k]}))

const capitalize = str => str[0].toUpperCase() + str.substring(1).toLowerCase()

const camelCase = (f, [s, ...rest]) => (f || s)
  ? (f || '') + capitalize(s) + camelCase(null, rest)
  : ''

const sanitizeProperty = (k, prop) => camelCase(k, prop.replace(/[^\w\s]/gi, '@').split('@'))

const defaultResolver = prefix => (prm, prop) => {
  if (!prop) return ''
  else if (prop === true) return `${prefix}${prm ? '-' + prm : ''}`
  else return `${prefix ? prefix + '-' : ''}${prop}${prm ? '-' + prm : ''}`
}

const sanitizeParam = (param, prefix) => {
  const params = {
    type: param,
    exclude: [],
    resolve: defaultResolver(prefix),
    childs: []
  }
  if (typeof param !== 'string') return {...params, ...param}
  else return params
}

const getChildModifiers = (key, type, resolve, childs) => elements[type]
  .reduce((cm, _) => ({
    ...cm,
    [sanitizeProperty(key, _)]: {
      prefix: resolve(_, true),
      params: childs
    }
  }), {})

const getParamsAttribute = (key, params, prefix) => params.reduce((ac, param) => {
  const {resolve, exclude, type, childs} = sanitizeParam(param, prefix)
  if (type === 'default') {
    return {...ac, [key]: {class: (...a) => resolve(undefined, ...a)}}
  } else {
    const childModifiers = getChildModifiers(key, type, resolve, childs)
    const res = elements[type]
      .filter(p => exclude.findIndex(_ => _ === p))
      .reduce((attrs, _) => ({
        ...attrs,
        [sanitizeProperty(key, _)]: {class: (...a) => resolve(_, ...a)}
      }), generateAttributs(childModifiers))
    return {...ac, ...res}
  }
}, {})

const generateAttributs = mods => objectToArray(mods)
  .reduce((attrs, {key, value: {prefix, params}}) => ({
    ...attrs,
    ...getParamsAttribute(key, params, prefix)
  }), {})

const classes = generateAttributs(modifiers)

export default classes
