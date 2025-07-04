// Define the AngularJS app module
var app = angular.module("myApp", ["ngRoute"]);

// Configure routes
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/home.html",
      controller: "HomeController",
    })
    .when("/about", {
      templateUrl: "templates/about.html",
      controller: "AboutController",
    })
    .otherwise({
      redirectTo: "/",
    });
});

// Home Controller
app.controller("HomeController", function ($scope) {
  $scope.message = "Welcome to the Home Page!";
});

// About Controller
app.controller("AboutController", function ($scope) {
  $scope.message = "This is the About Page!";
});
