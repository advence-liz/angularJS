

//javascript code


(function (angular,$) {
    'use strict';

    angular.module('app', ['ngAnimate']);//'ngAnimate'
    angular.module('app')
        .controller('MainCtrl', ControllerCtrl);

    /** @ngInject 
     * @controller
     */
    function ControllerCtrl($scope, $animate) {
        $scope.roommates = [
            'Ari', 'Q', 'Sean', 'Anand'
        ];
        var element = $('ul');
        $animate.on('enter', element,
            function callback(element, phase) {
                // cool we detected an enter animation within the container
                debugger;
            }
        );

        setTimeout(function () {
            $scope.roommates.push('Ginger');
            $scope.$apply(); // 触发一次digest
            setTimeout(function () {
                $scope.roommates.shift();
                $scope.$apply(); // 触发digest

            }, 2000);
        }, 1000);


    }
    ControllerCtrl.$inject = ['$scope', '$animate'];//
} (window.angular,jQuery));

