import modifiers from './modifiers'

const isFunction = fn => fn && typeof fn === 'function'
const hasClassTransformFunction = key => modifiers[key] && isFunction(modifiers[key].class)

export const mapAttributsToClass = props => {
  if (props) {
    return Object.keys(props)
      .filter(hasClassTransformFunction)
      .map(k => modifiers[k].class(props[k]))
      .join(' ')
  } else return ''
}

export const mapAttributsToOthers = (props, attrs) => {
  return props ? Object.keys(props)
    .filter(k => !modifiers[k] && ((attrs && attrs.indexOf(k)) === -1))
    .reduce((others, key) => ({...others, [key]: props[key]}), {})
    : {}
}
