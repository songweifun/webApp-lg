/**
 * Created by daivd on 2017/5/4.
 */
'use strict';
angular.module('app').directive('appCompany',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/company.html',
        replace:true
    }
}])