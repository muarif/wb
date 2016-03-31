(function() {
  'use strict';

  angular
    .module('core')
    .controller('UserController', UserController);

  UserController.$inject = ['$scope'];

  function UserController($scope) {
    var vm = this;

    // User controller logic
    // ...

    init();

    function init() {
    }
  }
})();
