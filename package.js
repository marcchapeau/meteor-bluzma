Package.describe({
  name: 'chap:bluzma',
  version: '0.0.2',
  summary: 'A set of Blaze components for Bulma',
  git: 'https://github.com/marcchapeau/meteor-bluzma.git',
  documentation: null
})

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.3')
  api.use('ecmascript')
  api.use('templating@1.3.2')
  api.addFiles([
    'templates/button.js',
    'templates/button.html',
    'templates/field-horizontal.js',
    'templates/field-horizontal.html',
    'templates/icon.js',
    'templates/icon.html',
    'templates/modal-card.js',
    'templates/modal-card.html',
    'templates/tag.js',
    'templates/tag.html'
  ], 'client')
  api.mainModule('bluzma.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('chap:bluzma')
  api.mainModule('bluzma-tests.js')
})
