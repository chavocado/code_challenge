myApp.controller('AppointmentController', ['$scope', '$http', '$window', '$timeout',  function($scope, $http, $window, $timeout) {
//global variables
$scope.user;
$scope.scheduleFormSubmitted = false;
$scope.loading = false;

$scope.validation = function() {
  console.log('hi');
  $scope.loading = true;
  $timeout(function(){
    console.log('this ran');
    $scope.scheduleFormSubmitted = true;
    $scope.loading = false;
  }, 3000);
};

}]);
