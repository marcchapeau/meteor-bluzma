import { Template } from 'meteor/templating'
import Bluzma from 'meteor/chap:bluzma/bluzma'

import './level.html'

// https://bulma.io/documentation/layout/level

// Level

const bluzmaLevel = new Bluzma('Level', ['mobile'])

bluzmaLevel.helpers({
  mobile: () => Template.currentData().mobile && 'is-mobile'
})

bluzmaLevel.register()

// Level left

const bluzmaLevelLeft = new Bluzma('LevelLeft')

bluzmaLevelLeft.register()

// Level right

const bluzmaLevelRight = new Bluzma('LevelRight')

bluzmaLevelRight.register()

// Level item

const bluzmaLevelItem = new Bluzma('LevelItem')

bluzmaLevelItem.register()
