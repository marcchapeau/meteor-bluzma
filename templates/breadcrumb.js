import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './breadcrumb.html'

// https://bulma.io/documentation/components/breadcrumb

const bluzmaBreadcrumb = new Bluzma('Breadcrumb')

bluzmaBreadcrumb.register()

const bluzmaBreadcrumbItem = new Bluzma('BreadcrumbItem', ['active', 'content', 'href'])

bluzmaBreadcrumbItem.helpers({
  active: () => Template.currentData().active && 'is-active'
})

bluzmaBreadcrumbItem.register()
