'use strict';

angular.module('webappApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'angular-flexslider', 'angularFileUpload'])
.config(function ($stateProvider, $httpProvider,$locationProvider) {
 $httpProvider.responseInterceptors.push('httpInterceptor');
 $stateProvider
	.state('index',{
		url:"", 
		views:{
			"content":{templateUrl:"views/home.html",controller:'HomeCtrl'},
			"topo":{templateUrl:"views/topo.html"},
			"rodape":{templateUrl:"views/rodape.html"}
		}

	})
	.state('produtos',{
		url:"/product",
		views:{
			"viewA":{template:"content product.html"},
			"viewB":{template:"content product2.html"}
		}
	})
	
	.state('admin',{
		url:"/admin",
		views:{ 
			"admin.dashboard":{templateUrl:"views/admin/admindashboard.html"},
			"admin.menu":{templateUrl:"views/admin/menu.html"},
			"topo":{templateUrl:"views/admin/topoadmin.html"},
			"rodape":{templateUrl:"views/rodape.html"}
		}
	})
	.state('admincategoria',{
		url:"/admincategoria",
		views:{
			"admin.menu":{templateUrl:"views/admin/menu.html"},	
			"topo":{templateUrl:"views/admin/topoadmin.html"},
			"admin.content":{templateUrl:"views/admin/admincategoria.html",controller:'CategoriaAdminCtrl'},
			"rodape":{templateUrl:"views/rodape.html"}
		}
	})
	.state('adminsubcategoria',{
		url:"/adminsubcategoria",
		views:{
			"admin.menu":{templateUrl:"views/admin/menu.html"},	
			"topo":{templateUrl:"views/admin/topoadmin.html"},
			"admin.content":{templateUrl:"views/admin/adminsubcategoria.html",controller:'SubcategoriaAdminCtrl'},
			"rodape":{templateUrl:"views/rodape.html"}
		}
	})
	.state('adminproduto',{
		url:"/adminproduto",
		views:{
			"admin.menu":{templateUrl:"views/admin/menu.html"},	
			"topo":{templateUrl:"views/admin/topoadmin.html"},
			"admin.content":{templateUrl:"views/admin/adminproduto.html",controller:'ProdutoAdminCtrl'},
			"rodape":{templateUrl:"views/rodape.html"}
		}
	})

	;

});

angular.module('webappApp').factory('httpInterceptor', ['$q', 
    function($q) {
        return function(promise) {
            return promise.then(function(response) {
                $("#loading").hide();
                return response;
            }, function(response) {
                return $q.reject(response);
            });
        };
    }
]);