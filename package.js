Package.describe({
  name: 'chap:bluzma',
  version: '0.6.1',
  summary: 'A set of Blaze components for Bulma',
  git: 'https://github.com/marcchapeau/meteor-bluzma.git',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.3')
  api.use('ecmascript')
  api.use('templating@1.3.2')
  api.addFiles([
    'templates/box.js',
    'templates/breadcrumb.js',
    'templates/button.js',
    'templates/card.js',
    'templates/columns.js',
    'templates/div.js',
    'templates/field.js',
    'templates/icon.js',
    'templates/image.js',
    'templates/level.js',
    'templates/link.js',
    'templates/message.js',
    'templates/modal.js',
    'templates/switch.js',
    'templates/tag.js',
    'templates/title.js',
    'templates/table.js',
    'templates/tabs.js',
    'templates/form.js',
    'templates/select.js',
    'templates/span.js'
  ], 'client')
  api.mainModule('bluzma.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('chap:bluzma')
  api.mainModule('bluzma-tests.js')
})
