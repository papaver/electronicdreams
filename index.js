(function() {
    'use strict';

    //- module ----------------------------------------------------------------

    angular.module('app', [
        'app.main'
    ]).config(appConfig);

    //- config ----------------------------------------------------------------

    appConfig.$inject = ['$locationProvider', '$routeProvider'];
    function appConfig($locationProvider, $routeProvider) {

        // redirect to main page
        $routeProvider.otherwise({
            redirectTo: '/main'
        });

        // default hash prefix
        $locationProvider.hashPrefix('!');

    }

})();
