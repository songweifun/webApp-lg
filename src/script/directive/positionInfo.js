/**
 * Created by daivd on 2017/5/4.
 */
angular.module('app')
    .directive('appPositionInfo',[function () {
        return {
            restrict: 'A',
            templateUrl: 'view/template/positionInfo.html',
            replace:true,
            scope:{
                isLogin:'=',
                isActive:'=',
                pos:'='

            },
            link:function ($scope) {
                $scope.imagePath=$scope.isActive?'image/star-active.png':'image/star.png';
            }

        }
    }])