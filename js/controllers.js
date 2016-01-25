var phonecatApp = angular.module('myApp', []);

phonecatApp.controller('ChemicalsCtrl', function ($scope, $http) {
  $scope.chems = [];

  $scope.find = () => {

    $http.get(`/l?q=${ $scope.search_str}`).then((result) => {
      result = result.data;
      if (result.truncated) {
          $scope.results_count = `Too many matches (${result.count}). Showing on first 1000 records`;
      } else {
          $scope.results_count = result.count;
      }
      $scope.chems = result.records;
    });


  }

});
