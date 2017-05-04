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
            .state('position', {
                url: '/position/:id',
                templateUrl: 'view/position.html',
                controller: 'positionCtrl'//命名规则名称+Ctrl
            })
            .state('company', {
                url: '/company/:id',
                templateUrl: 'view/company.html',
                controller: 'companyCtrl'//命名规则名称+Ctrl
            })
        $urlRouterProvider.otherwise('main');//默认
    }])
/**
 * Created by daivd on 2017/5/4.
 */
'use strict'
angular.module('app').controller('companyCtrl',['$scope',function ($scope) {


}])
/**
 * Created by david on 2017/5/2.
 */
'use strict'
angular.module('app').controller('mainCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('/data/positionList.json').then(function ($resp) {
        $scope.list=$resp.data;
        //console.log($resp);
    })

}])
/**
 * Created by david on 2017/5/2.
 */
'use strict'
angular.module('app').controller('positionCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
    $http.get('./data/position.json?id='+$state.params.id).then(function ($resp) {
        $scope.isLogin=false;
        $scope.position=$resp.data;
    })


}])
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
