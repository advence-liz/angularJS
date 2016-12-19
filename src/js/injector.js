//javascript code


(function (angular) {
    'use strict';

    angular.module('app', ['ng']);
    angular.module('app')
        .controller('MainCtrl', ControllerCtrl);

    /** @ngInject 
     * @controller
     */
    function ControllerCtrl(window) {
        var vm = this;
        vm.author = 'liz';
        vm.subject = 'angular';
       
        // function init() {
        // }

    }
    // var scope = $rootScope.$new();
    // var ctrl = $controller('')
    // var ng=angular.injector(['ng']);
    // var root=ng.get("$rootScope");

     ControllerCtrl.$inject = ['$window'];//
 var injector=   angular.bootstrap(document, ['app']);
    // var injector = angular.injector(['app']);
    var http = injector.get('$http');
} (window.angular));

