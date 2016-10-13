//javascript code
+function(window,angular){

      var mainApp = angular.module("mainApp",[]);
        mainApp.controller("mainController", ['$scope',function Controller($scope) {
                  $scope.subject="angular";
                  $scope.author="liz";
                  
          
        }]);
}(window,window.angular);