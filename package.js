Package.describe({
  name: 'chap:bluzma',
  version: '0.0.3',
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
    'templates/columns.js',
    'templates/field.js',
    'templates/field.html',
    'templates/icon.js',
    'templates/modal.js',
    'templates/modal.html',
    'templates/tag.js',
    'templates/tag.html',
    'templates/title.js',
    'templates/table.html',
    'templates/table.js',
    'templates/tabs.html',
    'templates/tabs.js',
    'templates/card.html',
    'templates/card.js',
    'templates/form.html',
    'templates/form.js',
    'templates/select.html',
    'templates/select.js'
  ], 'client')
  api.mainModule('bluzma.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('chap:bluzma')
  api.mainModule('bluzma-tests.js')
})
