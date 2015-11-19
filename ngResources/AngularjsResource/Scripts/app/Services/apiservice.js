(function () {
    'use strict';
    angular
        .module('app')
        .factory('apiservice', apiservice);

    apiservice.$inject = ['$http','$resource'];

    function apiservice($http, $resource) {
        var resourceUrl = '/api/customers/:id';
        return $resource(resourceUrl,
            { id: "@id" },
            { update: { method: "PUT" }
            });
    }
})();