/**
 * Created by daivd on 2017/5/4.
 */
'use strict';
angular.module('app').directive('appPositionClass',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/positionClass.html',
        replace:true
    }
}])