import { Template } from 'meteor/templating'

const attributs = {
  class: {class: classes => classes},
  onSubmit: true,
  id: true
}

Template.bluzmaForm.helpers({
  class () {
    const data = Template.currentData()
    return Object.keys(data)
      .filter(k => attributs[k] && attributs[k].class)
      .map(k => attributs[k].class(data[k]))
      .join(' ')
  }
})

Template.bluzmaForm.events({
  'submit form' (...args) {
    args[0].preventDefault()
    const { onSubmit } = Template.currentData()
    if (onSubmit) onSubmit(...args)
  }
})
