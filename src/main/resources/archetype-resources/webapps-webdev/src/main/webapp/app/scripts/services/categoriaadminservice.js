'use strict';

angular.module('webappApp')
  .factory('categoriaAdminService', function ($resource) {
   
    return $resource('../api/admincategoria',{
    	
    },{
       update:{
          method:'PUT'
      }
    });

  });
