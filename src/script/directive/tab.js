/**
 * Created by daivd on 2017/5/3.
 */
'use strict';
angular.module('app')
.directive('appTab',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/tab.html',
        replace:true,
        scope:{
            select:'=',
            indexs:'=',
            visible:'='
        },
        link:function ($scope,elment,attr) {

            $(elment).delegate('li','click',function () {
                $('li').removeClass('active');
                $(this).addClass('active');
                //$scope.visible=true;
                //alert($(this).attr('index'))
                $scope.indexs=$(this).attr('indexs');
                $scope.visible=true;
                //console.log($scope);
                $scope.$apply();


            })


        }

    }
}])