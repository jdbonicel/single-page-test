var app = angular.module("app", ['ui.bootstrap','ngRoute']);


//Define Routing for app
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'src/view/home.html',
        controller: 'homeController'
    }).
      when('/config', {
        templateUrl: 'src/view/config.html',
        controller: 'configController'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);