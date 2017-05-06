/**
 * Created by daivd on 2017/5/3.
 */
'use strict';
angular.module('app')
.directive('appSheet',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/sheet.html',
        replace:true,
        scope:{
            visible:'=',
            sheetlist:'=',
            changeConf:'&'
        },
        link:function ($scope,element,attr) {
            //$scope.visible="fefef"
        },
        controller:['$scope',function ($scope) {

        }]

    }
}])


