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