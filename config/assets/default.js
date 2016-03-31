'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css'
      ],
      // js: [
      //   'public/lib/jquery/dist/jquery.min.js',
      //   'public/lib/react/react.min.js',
      //   'public/lib/react/react-dom.min.js',
      //   'public/lib/react/react-dom-server.min.js',
      //   'public/lib/react/react-with-addons.min.js',
      //   'public/lib/angular/angular.min.js',
      //   'public/lib/angular-resource/angular-resource.min.js',
      //   'public/lib/angular-animate/angular-animate.min.js',
      //   'public/lib/angular-messages/angular-messages.min.js',
      //   'public/lib/angular-ui-router/release/angular-ui-router.min.js',
      //   'public/lib/angular-ui-utils/ui-utils.min.js',
      //   'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
      //   'public/lib/angular-file-upload/angular-file-upload.min.js',
      //   'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
      // ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
