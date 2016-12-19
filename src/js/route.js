//javascript code


(function (angular) {
  'use strict';

  angular.module('app', ['ngRoute']);
  angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<section>' +
          '<h1>{{vm.subject}}</h1>' +
          '</section>',
          controller: ControllerCtrl
        })
        .when('liz', {
          template: '<section>' +
          '<h1>{{vm.author}} lizzzzzz</h1>' +
          '</section>',
          controller: ControllerCtrl
        });
    }])
    .controller('MainCtrl', ControllerCtrl);

  /** @ngInject 
   * @controller
   */
  function ControllerCtrl(window) {
    var vm = this;
    vm.author = 'liz';
    vm.subject = 'angular';
    // init();

    // function init() {
    // }

  }
  ControllerCtrl.$inject = ['$window'];//


} (window.angular));

