/**
 * Created by david on 2017/5/2.
 */
'use strict'
angular.module('app').controller('mainCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('/data/positionList.json').then(function ($resp) {
        $scope.list=$resp.data;
        //console.log($resp);
    })

}])