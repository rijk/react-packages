Package.describe({
  name: 'react',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Everything you need to use React with Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('react.js');

  api.use([
    'jsx',
    'react-runtime'
  ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('react');
  api.addFiles('react-tests.js');
});
