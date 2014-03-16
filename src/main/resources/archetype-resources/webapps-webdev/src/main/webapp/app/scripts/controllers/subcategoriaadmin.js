'use strict';

angular.module('webappApp').controller('SubcategoriaAdminCtrl', ['$scope', 'categoriaAdminService', 'subcategoriaAdminService',
    
    function($scope, categoriaAdminService, subcategoriaAdminService) {
        
        $scope.categoriaLabel = "Selecione categoria";
        $scope.categorias = categoriaAdminService.query();
        $scope.subcategoria = new subcategoriaAdminService();
        $scope.listSubcategorias = subcategoriaAdminService.query();
        $scope.subcategoria.status = 'Ativo';
        $scope.isVisibleButton = true;
        $scope.loading = false;
        
        $scope.changeCategoria = function() {
            $scope.categoriaLabel = $scope.subcategoria.categoria.nome;
        };

        $scope.save = function() {
            $scope.loading = true;
            if ($scope.subcategoria.id > 0) {
                $scope.update();
            }
            else {
                $scope.insert();
            }
        };

        $scope.update = function() {
            $scope.subcategoria.$update(function() {
                $scope.listSubcategorias = subcategoriaAdminService.query();
                $scope.reset();
                alertify.success("As informações foram salvas com sucesso");
                $scope.loading = false;
            }, function(err) {
                alertify.error("Subcategoria Existente");
                $scope.listSubcategorias = subcategoriaAdminService.query();
                $scope.loading = false;
            });
        };
        
        $scope.insert = function() {
            $scope.subcategoria.$save(function() {
                $scope.subcategoria = new subcategoriaAdminService();
                $scope.listSubcategorias = subcategoriaAdminService.query();
                $scope.reset();
                alertify.success("As informações foram salvas com sucesso");
                $scope.loading = false;
            }, function(err) {
                alertify.error("Subcategoria Existente");
                $scope.listSubcategorias = subcategoriaAdminService.query();
                $scope.loading = false;
            });
        };

        $scope.reset = function() {
            $scope.subcategoria = new subcategoriaAdminService();
            $scope.subcategoria.status = 'Ativo';
            $scope.categoriaLabel = "Selecione categoria";
            $scope.loading = false;
        };

        $scope.edit = function(subcategoria) {
            $scope.subcategoria = subcategoria;
            $scope.categoriaLabel = $scope.subcategoria.categoria.nome;
        };

    }

]);