/**
 * Created by david on 2017/5/2.
 */
'use strict'
angular.module('app').controller('positionCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
    $http.get('./data/position.json?id='+$state.params.id).then(function ($resp) {
        $scope.isLogin=false;
        $scope.position=$resp.data;
    })


}])