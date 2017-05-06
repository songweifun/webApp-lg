/**
 * Created by david on 2017/5/2.
 */
'use strict';
var m=angular.module('app',['ui.router','ngCookies']);
/**
 * Created by daivd on 2017/5/6.
 */
'use strict';
angular.module('app')
    .value('dict',{})//缓存全局变量 就是设置全局变量
    .run(['dict','$http',function (dict,$http) {
        $http.get('data/city.json').then(function(res) {
            dict.city = res.data;
        })
        $http.get('data/salary.json').then(function(res) {
            dict.salary = res.data;
        })
        $http.get('data/scale.json').then(function(res) {
            dict.scale = res.data;
        })

    }])

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
/**
 * Created by daivd on 2017/5/4.
 */
'use strict'
angular.module('app').controller('companyCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
    $http.get('./data/company.json?id='+$state.params.id).then(function ($resp) {
        $scope.company=$resp.data;
    })


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
angular.module('app').controller('positionCtrl',['$scope','$http','$state','$q','cache',function ($scope,$http,$state,$q,cache) {
    //cache.put('key','fansongwei');
    //console.log(cache.get('key'));
    cache.remove('key');
    function getPosition() {
        //用$q服务生成延迟对象
        var defer=$q.defer();
        $http.get('./data/position.json?id='+$state.params.id).then(function ($resp) {
            //异步请求成功的函数
            $scope.isLogin=false;
            $scope.position=$resp.data;
            defer.resolve($resp);//可理解为向下一个then成功异步回调传递参数
        },function ($err) {
            //异步请求失败调用的函数
            defer.reject($err);
        })

        return defer;

    }
    //派生出promise对象
    getPosition().promise.then(function ($resp) {
        getCompany($resp.data.companyId);//执行下面的异步操作查询公司

    },function ($err) {

    })

    function getCompany(id) {

        $http.get('./data/company.json?id='+id).then(function ($resp) {
            $scope.company=$resp.data;
        })


    }



}])
/**
 * Created by daivd on 2017/5/4.
 */
'use strict'
angular.module('app').controller('searchCtrl',['$scope','$http','dict',function ($scope,$http,dict) {

    $scope.name='';

    $scope.search=function () {
        $http.get('./data/positionList.json?name='+$scope.name).then(function ($resp) {
            $scope.positionList=$resp.data;
        })

    }
    $scope.search();//初始化数据


    $scope.selectMenus=[
        {id:'city',name:'城市'},
        {id:'salary',name:'薪资'},
        {id:'scale',name:'公司规模'},
    ]


    $scope.dict=dict;//将全局变量封装到scope中
    $scope.filterObj={};//筛选



    $scope.changeConf=function (id,name) {
        $scope.visible=false;
        //console.log(item);

        if(id){
            angular.forEach($scope.selectMenus ,function (item) {
                    if(item.id==$scope.indexs){
                        item.name=name;
                    }
            })
            $scope.filterObj[$scope.indexs+'Id']=id;
        }else{
            angular.forEach($scope.selectMenus ,function (item) {
                    switch (item.id){
                        case 'city':
                            item.name='城市';
                            break;
                        case 'salary':
                            item.name='薪资';
                            break;
                        case 'scale':
                            item.name='公司规模';
                            break;
                    }
            })

        }



    }



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
        replace:true,
        scope:{
            com:'='
        }
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
                data:'=',
                filterObj:'='
            }
        }
    }])

/**
 * Created by daivd on 2017/5/3.
 */
'use strict';
angular.module('app')
.directive('appSheet',[function () {
    return {
        restrict:'A',
        templateUrl:'view/template/sheet.html',
        replace:true,
        scope:{
            visible:'=',
            sheetlist:'=',
            changeConf:'&'
        },
        link:function ($scope,element,attr) {
            //$scope.visible="fefef"
        },
        controller:['$scope',function ($scope) {

        }]

    }
}])



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
/**
 * Created by daivd on 2017/5/6.
 */
'use strict';
angular.module('app')
.filter('filterByObj',[function () {
    return function (list,obj) {
        var result=[];
        angular.forEach(list,function (item) {
            var isEqual=true;
            for(var e in obj){
                if(item[e]!==obj[e]){
                    isEqual=false;
                }
            }
            if(isEqual){
                result.push(item);
            }
        })
        return result;
    }
}])
/**
 * Created by daivd on 2017/5/6.
 */
'use strict';
angular.module('app')
.factory('cache',['$cookies',function ($cookies) {
    return{
        put:function (key,val) {
            $cookies.put(key,val);
        },
        get:function (key) {
            return $cookies.get(key)

        },
        remove:function (key) {
            $cookies.remove(key);
        }
    }
}])