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