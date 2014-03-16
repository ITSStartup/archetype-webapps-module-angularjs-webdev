'use strict';

angular.module('webappApp').factory('subcategoriaAdminService', function ($resource) {

        return $resource('../api/adminsubcategoria',{

    },{
        update:{
           method:'PUT'
        }
    });

});
