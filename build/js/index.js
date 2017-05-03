/**
 * Created by david on 2017/5/2.
 */
'use strict';
var m=angular.module('app',['ui.router']);
/**
 * Created by david on 2017/5/2.
 */
'use strict';//严格模式
//引入模块
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'view/main.html',
                controller: 'mainCtrl'//命名规则名称+Ctrl
            })
        $urlRouterProvider.otherwise('main');//默认
    }])
/**
 * Created by david on 2017/5/2.
 */
'use strict'
angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
    $scope.list=[
        {
            id:1,
            name:"销售",
            imgSrc:"image/company-3.png",
            companyName:"千度",
            city:"上海",
            time:"2017-05-03 23:15"
        },
        {
            id:2,
            name:"开发",
            imgSrc:"image/company-1.png",
            companyName:"百度",
            city:"南京",
            time:"2017-05-04 23:15"
        }
    ]

}])
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
/**
 * Created by david on 2017/5/2.
 */
'use strict';
angular.module('app').directive('appHead',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/head.html',
        replace:true
    }
}])
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
                data:'='
            }
        }
    }])
