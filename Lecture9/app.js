(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "Aniket";
      $scope.sayHello = function () {
        return "Hello ";
      };
    })
    .controller("DIController", DIController)
    .controller("MsgController", MsgController);

  DIController.$inject = ["$scope", "$filter"];
  function DIController($scope, $filter, $injector) {
    $scope.name = "Aniket";
    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };
  }

  MsgController.$inject = ["$scope"];
  function MsgController($scope) {
    $scope.name = "Aniket";
    $scope.imageNumber = "image1";

    $scope.sayMessage = function () {
      return "My nmae is Aniket";
    };
  }
})();
