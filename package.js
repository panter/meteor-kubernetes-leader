Package.describe({
  name: 'panter:kubernetes-leader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary:
    'Find out which of your pods is the leader in a kubernetes setup. It assumes that you have a k8s.gcr.io/leader-elector sidecar container',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.8.1')
  api.use('ecmascript')
  api.mainModule('panter-kubernetes-leader.js', 'server')
})
