//javascript code
+function(window,angular){
     
      var mainApp = angular.module("mainApp",[]);
        mainApp.controller("mainController", ['$scope','$controller',function Controller($scope) {
                  $scope.subject="angular";
                  $scope.author="liz";
                  var vm=$scope.vm;
               
          
        }]);
}(window,window.angular);