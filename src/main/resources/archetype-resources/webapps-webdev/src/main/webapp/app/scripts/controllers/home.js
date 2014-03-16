'use strict';

angular.module('webappApp').controller('HomeCtrl', ["$scope", "categoriaService", function ($scope, categoriaService) {
	
        $scope.categorias = categoriaService.query();
        
	$scope.slides = [
            'images/slide_1.png',
            'images/slide_2.png'
	];

	$scope.logos = [
	    'images/logo_seadoo.png',
            'images/logo_diverite.png',
            'images/logo_head.png',
            'images/logo_sealife.png', 'images/logo_uwatec.png'
	];
	
}]);