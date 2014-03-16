'use strict';

angular.module('webappApp').controller('ProdutoAdminCtrl', ['$scope', '$upload', 'produtoAdminService', 'subcategoriaAdminService',
    function($scope, $upload, produtoAdminService, subcategoriaAdminService) {

        $scope.fileToUpload = null;
        
        $scope.produto = new produtoAdminService();
        $scope.listProdutos = produtoAdminService.query();
        $scope.produto.status = 'Ativo';
        $scope.listSubcategoria = subcategoriaAdminService.query();
        $scope.subcategoriaLabel = "Selecione subcategoria";
        $scope.loading = false;

        $scope.alertSuccess = function() {
            alertify.success("As informações foram salvas com sucesso");
        };

        $scope.alertExist = function() {
            alertify.error("Produto já cadastrado");
        };

        $scope.save = function() {
            $scope.loading = true;
            if ($scope.produto.id > 0) {
                $scope.update();
            } else {
                
                $scope.produto.$save(function() {
                    $scope.reset();
                    $scope.listProdutos = produtoAdminService.query();
                    $scope.alertSuccess();
                    $scope.loading = false;
                }, function(err) {
                    console.log(err);
                    $scope.alertExist();
                    $scope.listProdutos = produtoAdminService.query();
                    $scope.loading = false;
                });
            }
        };

        $scope.update = function() {
            $scope.produto.$update(function() {
                $scope.listProdutos = produtoAdminService.query();
                $scope.reset();
                $scope.alertSuccess();
                $scope.loading = false;
            }, function(err) {
                $scope.alertExist();
                $scope.listProdutos = produtoAdminService.query();
                $scope.loading = false;
            });
        };

        $scope.reset = function() {
            $('#file').val('');
            $scope.subcategoriaLabel = "Selecione subcategoria";
            $scope.produto = new produtoAdminService();
            $scope.produto.status = "Ativo";
            $scope.loading = false;
        };

        $scope.edit = function(produto) {
            $scope.produto = produto;
            $scope.subcategoriaLabel = produto.subcategoria.nome;
        };

        $scope.changeSubcategoria = function() {
            $scope.subcategoriaLabel = $scope.produto.subcategoria.nome;
        };

        $scope.setFileUpload = function($files) {
            $scope.fileToUpload = $files[0];            
        };

        $scope.uploadFile = function() {
            $scope.uploading = true;
            $upload.upload({
                url: "../api/adminproduto/upload",
                method: "POST",
                file: $scope.fileToUpload
            }).success(function(data, status, headers, config) {
                alertify.success('Upload realizado com sucesso');
                $scope.uploading = false;
            }).error(function(data, status, headers, config) {
                alertify.error('Não foi possível realizar o upload');
                $scope.uploading = false;
            });
        };

    }
]);
