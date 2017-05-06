/**
 * Created by daivd on 2017/5/4.
 */
'use strict';
angular.module('app').directive('appPositionClass',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/positionClass.html',
        replace:true,

        scope:{
            com:'='
        },

        link:function ($scope,elment,attr) {
            //alert($)
            //console.log($scope.com);
            // $scope.showPositionList=function($index){
            //     //console.log($scope.com);
            //     $scope.isActive=$index;
            //     $scope.positionList=$scope.com.positionClass[$index].positionList;
            // }

            //$scope.showPositionList(0);//初始化让首个选中

            $(elment).delegate('button','click',function () {
                $('button').removeClass('active');
                $(this).addClass('active');
                var index=$(this).index();
                $(elment).find('ul.lists').hide();
                $(elment).find('ul.lists').eq(index).show();

            })


        }
    }
}])