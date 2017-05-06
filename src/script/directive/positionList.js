/**
 * Created by daivd on 2017/5/3.
 */
'use strict';
angular.module('app')
    .directive('appPositionList',[function () {
        return {
            restrict: 'A',
            templateUrl: 'view/template/positionList.html',
            replace:true,
            scope:{
                data:'=',
                filterObj:'='
            }
        }
    }])
