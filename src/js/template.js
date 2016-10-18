//javascript code


(function (angular) {
  'use strict';

  angular.module('app', []);
  angular.module('app')
    .controller('MainCtrl', ControllerCtrl);

  /** @ngInject */
  function ControllerCtrl(window) {
    var vm = this;
    vm.author = 'liz';
    vm.subject='angular';
    // init();

    // function init() {
    // }
    
  }
 ControllerCtrl.$inject = ['$window'];//
} (window.angular));

