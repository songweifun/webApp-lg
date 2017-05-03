/**
 * Created by daivd on 2017/5/3.
 */
'use strict';
angular.module('app')
.directive('appFoot',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/foot.html',
        replace:true

    }
}])