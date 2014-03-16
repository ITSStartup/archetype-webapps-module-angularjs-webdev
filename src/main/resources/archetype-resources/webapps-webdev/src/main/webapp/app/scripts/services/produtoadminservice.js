'use strict';

angular.module('webappApp')
    .factory('produtoAdminService', function($resource) {

        return $resource('../api/adminproduto/:upload', {}, {
            update: {
                method: 'PUT'
            }

        });
        
    });
