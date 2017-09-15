(function() {
    'use strict';

    //- module ----------------------------------------------------------------

    angular.module('app.main', ['app.core'])
        .config(moduleConfig)
        .controller('MainController', MainController);

    //- config ----------------------------------------------------------------

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
        });
    }

    //- controllers -----------------------------------------------------------

    MainController.$inject = [];
    function MainController() {
    }

})();
