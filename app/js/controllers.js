'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])

    .controller('capController', ['$scope', 'capService',
        function($scope, capService)
        {
            $scope.capEachWord =
                function()
                {
                    //can't seem to figure out how to make hitting enter work :(
                    $scope.sCapAnswer = capService.capThatShiz($scope.tbStrToCap);

                    $scope.tbStrToCap = "";
                }
    }]);
