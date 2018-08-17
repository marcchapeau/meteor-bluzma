import { Template } from 'meteor/templating'

import './card.html'

const others = (data, attrs) =>
  Object.keys(data)
    .filter(k => !attrs[k])
    .reduce((props, key) => ({...props, [key]: data[key]}), {})

const cardImageAttributs = {
  src: true,
  size: {class: size => `is-${size}`},
  alt: true
}

const cardHeaderAttributs = {
  title: true
}

const cardContentAttributs = {
  class: {class: classes => classes}
}

Template.bluzmaCardImage.helpers({
  class () {
    const data = Template.currentData()
    return Object.keys(data)
      .filter(k => cardImageAttributs[k] && cardImageAttributs[k].class)
      .map(k => cardImageAttributs[k].class(data[k]))
      .join(' ')
  },
  others () {
    const data = Template.currentData()
    return others(data, cardImageAttributs)
  }
})

Template.bluzmaCardHeader.helpers({
  others () {
    const data = Template.currentData()
    return others(data, cardHeaderAttributs)
  }
})

Template.bluzmaCardContent.helpers({
  class () {
    const data = Template.currentData()
    return Object.keys(data)
      .filter(k => cardContentAttributs[k] && cardContentAttributs[k].class)
      .map(k => cardContentAttributs[k].class(data[k]))
      .join(' ')
  },
  others () {
    const data = Template.currentData()
    return others(data, cardContentAttributs)
  }
})
