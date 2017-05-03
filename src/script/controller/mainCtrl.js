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