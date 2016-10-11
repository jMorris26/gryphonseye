'use strict';

var app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })
  .when('/madwire', {
    templateUrl: 'partials/madwire.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
