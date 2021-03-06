'use strict';

/**
 * @ngdoc service
 * @name com.tinizine.azoomee.parent.main.factory01
 * @description
 * # factory01
 * Factory in the com.tinizine.azoomee.parent.main.
 */
define(['app', 'angular'], function (app, angular) {
    console.log('within define of factory01');
    app.factory('factory01', function () {
        // Service logic
        // ...
        console.log('service logic of factory01');

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    });
    // or use angular.module to create a new module
});
