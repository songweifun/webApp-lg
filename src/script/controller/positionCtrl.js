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