'use strict';

/**
 * @ngdoc function
 * @name web-parent-app-v2.controller:ForgottenPasswordCtrl
 * @description
 * # ForgottenPasswordCtrl
 * Controller of the web-parent-app-v2
 */

define(['app', 'angular', 'config'], function (app, angular, config) {
    app.controller('ForgottenPasswordCtrl', ["$scope", "$http",function ($scope,$http) {
        $scope.title = "Forgotten page";
        console.log(config.authUrl + "/requestPasswordReset");
        $scope.showForm = true;
        $scope.submit = function () {
            console.log('submit password reset form');

            $http({
                url: config.authUrl + "/requestPasswordReset",
                method: "GET",
                params: {
                    emailAddress: $scope.userId
                }
            })
                .then(function () {
                        $scope.showForm = false;
                    },
                    function (error) {
                        console.log('ERROR WHILE SENDING PASSWORD RESET REQUEST');
                    }
                );
        }
    }]);
    // ...
    //or use angular.module to create a new module
});

