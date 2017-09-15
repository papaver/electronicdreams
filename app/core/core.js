(function() {
    'use strict';

    //- module ----------------------------------------------------------------

    angular.module('app.core', ['ngRoute'])
        .factory('$', jqueryService)
        .factory('_', underscoreService);

    //- factories -------------------------------------------------------------

    jqueryService.$inject = ['$window'];
    function jqueryService($window) {
        return $window.jQuery;
    }

    //-------------------------------------------------------------------------

    underscoreService.$inject = ['$window'];
    function underscoreService($window) {
        return $window._;
    }

})();
