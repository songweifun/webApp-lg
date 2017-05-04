/**
 * Created by david on 2017/5/2.
 */
'use strict';
angular.module('app').directive('appHeadBar',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/headBar.html',
        replace:true,
        scope:{
            text:'@',
        },
        link:function ($scope) {
            $scope.back=function () {
                window.history.back();
            }
        }
    }
}])