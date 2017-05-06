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