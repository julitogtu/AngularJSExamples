(function () {
    'use strict';
    angular
        .module('app')
        .controller('democontroller', democontroller);

    democontroller.$inject = ['$scope', 'apiservice'];

    function democontroller($scope, apiservice) {
        $scope.title = 'Demo $resource';
        $scope.getAll = function () {
            apiservice.query()
                .$promise
                    .then(function (response) { console.log(response) })
                    .catch(function (response) { console.log(response); });
        };

        $scope.getOne = function () {
            apiservice.get({id:5})
            .$promise
                .then(function (response) { console.log(response); })
                .catch(function (response) { console.log(response); });
        };

        $scope.save = function () {
            var data = {
                'name': 'new name',
                'email': 'newname@email.com'
            };
            apiservice.save(data)
            .$promise
                .then(function (response) { console.log(response); })
                .catch(function (response) { console.log(response); });
        };

        $scope.delete = function () {
            apiservice.delete({id:2})
            .$promise
                .then(function (response) { console.log(response); })
                .catch(function (response) { console.log(response); });
        };

        $scope.update = function () {
            var data = {
                'id': '5',
                'name': 'update name',
                'email': 'updatename@email.com',
            };
            apiservice.update(data)
            .$promise
                .then(function (response) { console.log(response); })
                .catch(function (response) { console.log(response); });
        };
    }
})();
