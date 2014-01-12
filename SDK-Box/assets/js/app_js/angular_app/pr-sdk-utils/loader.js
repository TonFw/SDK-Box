// Controller responsável por fazer o auto_loader de arquivos JS
SDKApp.controller('JSLoaderController', function($scope) {
    // Pasta de onde surgem os outros arqs
    $scope.path = "assets/js/app_js/angular_app/";
    
    // Chave = nome_pasta, valor = nome_arquivo
    $scope.arqs_js = ['pr-sdk-utils/loader.js'];
                   
    $scope.bootjs = function() {
        for(i in $scope.arqs_js) $('#js_includes').append('<script src="' + $scope.arqs_js[i] + '"></script>');
    }
});