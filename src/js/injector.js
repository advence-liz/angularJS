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
        vm.html = "<dddd> ddddjjjjdd";

        // function init() {
        // }

    }
    // var scope = $rootScope.$new();
    // var ctrl = $controller('')
    var ng, $http, $q;
    ng = angular.injector(['ng']);
    $http = ng.get("$http");
    $q = ng.get("$q");
    // $http({
    //     method: 'Post',
    //     url: 'http://localhost:1234/api/values/post'
    // }).then(function successCallback(response) {
    //     debugger;

    // }, function errorCallback(response) {
    //     debugger;
    // });


    function asyncGreet(name) {
        // perform some asynchronous operation, resolve or reject the promise when appropriate.
        var state = (Min, Max) => {
            var Range = Max - Min;
            var Rand = Math.random();
            return (Min + Math.round(Rand * Range));
        };

        return $q(function (resolve, reject) {
            setTimeout(function () {
                if (state(1, 10) > 5) {
                    resolve('Hello, ' + name + '!');
                } else {
                    reject('Greeting ' + name + ' is not allowed.');
                }
            }, 1000);
        });
    }

    var promise = asyncGreet('Robin Hood');
    promise.then(function (greeting) {
        console.log('Success: ' + greeting);
    }, function (reason) {
        console.log('Failed: ' + reason);
    });


    ControllerCtrl.$inject = ['$window'];//
    var injector = angular.bootstrap(document, ['app']);
    // var injector = angular.injector(['app']);
    var http = injector.get('$http');
} (window.angular));

