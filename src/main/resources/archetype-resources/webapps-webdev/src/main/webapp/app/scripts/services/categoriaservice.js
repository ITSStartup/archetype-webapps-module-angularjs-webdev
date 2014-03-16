'use strict';

angular.module('webappApp').factory('categoriaService',
    
    function ($resource) {
        return $resource('../api/categoria');
    }

);