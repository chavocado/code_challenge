myApp.controller('WeatherController', ['$scope', '$http', '$window',  function($scope, $http, $window){
  //global variables
  $scope.zipCode;
  //weather variables
  $scope.weatherData = false;
  $scope.tempInFarenheit;
  $scope.description;
  $scope.icon;

  $scope.submitZip = function() {
    weather();
  };

  //get weather function
  function weather() {
      //api key
      var key = '&APPID=bafc05054926bcbddaf0ed250d7ef6d5';
      //construct our URL
      var baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
      var query = $scope.zipCode + ',us';
      var request = baseURL + query + key;
      console.log(request);

      $http({
          method: "GET",
          url: encodeURI(request)
        }).then(function(response){
          console.log(response);
          $scope.weatherData = true;
          $scope.tempInFarenheit = parseInt(((response.data.main.temp-273.15)*1.8)+32);
          $scope.description = response.data.weather[0].description;
          $scope.icon = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png';
        },function(response){
          //failure
          $scope.weatherData = false;
          window.alert('Open Weather Map was unable to find the zip code you entered. Please enter a valid zip code and try again.');
        });
  }

}]);
