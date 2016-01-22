//require('nw.gui').Window.get().showDevTools() ;

var phonecatApp = angular.module('myApp', []);

var finder = require("./queryjson");

phonecatApp.controller('ChemicalsCtrl', function ($scope) {
  $scope.chems = [];

  $scope.find = () => {
      var result = finder($scope.search_str);
      if (result.truncated) {
          $scope.results_count = `Too many matches (${result.count}). Showing on first 1000 records`;
      } else {
          $scope.results_count = result.count;
      }
      $scope.chems = result.records;
  }

});
