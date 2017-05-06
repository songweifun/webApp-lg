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
            .state('search', {
                url: '/search',
                templateUrl: 'view/search.html',
                controller: 'searchCtrl'//命名规则名称+Ctrl
            })
        $urlRouterProvider.otherwise('main');//默认
    }])