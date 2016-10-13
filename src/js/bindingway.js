//javascript code
+function(window,angular){
     
      var mainApp = angular.module("mainApp",[]);
        mainApp.controller("mainController", ['$scope','$controller',function Controller($scope) {
                  $scope.subject="angular";
                  $scope.author="liz";
                  $scope.vm={};
                 var vm=$scope.vm;
                 vm.apple=3;
                 vm.pen=4;
                 vm.sum=function(){
                   return vm.pen+vm.apple;
                 };
                 
          
        }]);
}(window,window.angular);