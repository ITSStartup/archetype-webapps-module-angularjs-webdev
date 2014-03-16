'use strict';

angular.module('webappApp').controller('CategoriaAdminCtrl', ['$scope', 'categoriaAdminService',
    function($scope, categoriaAdminService) {

        $scope.categoria = new categoriaAdminService();
        $scope.listCategorias = categoriaAdminService.query();
        $scope.categoria.status = 'Ativo';
        $scope.loading = false;

        $scope.save = function() {
        $scope.loading = true;
            if ($scope.categoria.id > 0) {
                $scope.update();
            }
            else {
                $scope.categoria.$save(function() {
                    $scope.categoria = new categoriaAdminService();
                    $scope.listCategorias = categoriaAdminService.query();
                    $scope.reset();
                    alertify.success("As informações foram salvas com sucesso");
                    $scope.loading = false;
                }, function(err) {
                    alertify.error("Categoria Existente");
                    $scope.listCategorias = categoriaAdminService.query();
                    $scope.loading = false;
                });
            }
        };

        $scope.update = function() {
            $scope.loading = true;
            $scope.categoria.$update(function() {
                $scope.listCategorias = categoriaAdminService.query();
                $scope.reset();
                alertify.success("As informações foram salvas com sucesso");
                $scope.loading = false;
            }, function(err) {
                alertify.error("Categoria Existente");
                $scope.listCategorias = categoriaAdminService.query();
                $scope.loading = false;
            }
            );
        };

        $scope.reset = function() {
            $scope.categoria = new categoriaAdminService();
            $scope.categoria.status = 'Ativo';
            $scope.loading = false;
        };

        $scope.edit = function(categoria) {
            $scope.categoria = categoria;
        };

    }
]);
