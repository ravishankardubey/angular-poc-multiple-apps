'use strict';
var app = angular.module('app', []);

app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

function UserListCtrl($scope, $http, $templateCache){
    var serverUrl = 'http://192.168.10.165:9900';
    var getUrl = serverUrl + '/getUsers';
    var insertUrl = serverUrl + '/insertUser';
    var updateUrl = serverUrl + '/updateUser';
    var removeUrl = serverUrl + '/removeUser';
    var insertMethod = 'POST';
    var updateMethod = 'PUT';
    var removeMethod = 'DELETE';
    $scope.showEdit = false;
    $scope.showLabel= true;

    // 추가
    $scope.save = function(){
        var formData = {
            "username" : this.username,
            "password" : this.password,
            "email" : this.email
        };
        this.username = '';
        this.password = '';
        this.email = '';

        var data = 'data=' + JSON.stringify(formData);
        httpMethod(insertMethod, insertUrl, data, $templateCache);


        return false;
    };
    $scope.update = function(){
        var userData = {
            "username": this.user.username,
            "password": this.user.password,
            "email": this.user.email,
            "_id": this.user._id
        };
        var data = 'data=' + JSON.stringify(userData);
        httpMethod(updateMethod, updateUrl, data, $templateCache);
        $scope.list();
        return false;
    };
    // 삭제
    $scope.remove = function(){
        var userData = {
            "username" : this.user.username,
            "password": this.user.password,
            "email" : this.user.email
        };
        var data = 'data=' + JSON.stringify(userData);

        httpMethod(removeMethod, removeUrl, data, $templateCache);
        $scope.list();
        return false;
    };
    $scope.list = function(){
        var url = 'http://192.168.10.165:9900/getUsers';
        $http.get(url).success(function(data){
            $scope.users = data;
        });
    };

    function httpMethod(method, url, data, templateCache){
        $http({
            method: method,
            url: url,
            data: data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            cache: templateCache
        }).
            success(function(response){
                $scope.list();
            }).
            error(function(response){
            });
    }

    $scope.selectUser = function(){
        if(this.showEdit === false){
            this.showEdit = true;
            this.showLabel = false;
        }
    };

    $scope.list();
}