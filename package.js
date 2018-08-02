Package.describe({
  name: 'chap:bluzma',
  version: '0.0.1',
  summary: 'A set of Blaze components for Bulma',
  git: 'https://github.com/marcchapeau/meteor-bluzma.git',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.3')
  api.use('ecmascript')
  api.use('templating')
  api.addFiles([
    'templates/button.js',
    'templates/button.html',
    'templates/icon.js',
    'templates/icon.html',
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
