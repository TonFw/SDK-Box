ProumoApp.controller('ArvoreDiretorioController', function($scope, $http) {
    // Estado default da pasta como aberta
    $scope.folder_state = '-open';
    $scope.folder_name = 'strong';
    
    // abre e fecha os diretórios (toggle) 
    $scope.toggle_pasta = function(event) {
        if ($scope.folder_state === undefined){
            $scope.folder_state = '-open';
            $scope.folder_name = 'strong';
        }else {
            $scope.folder_name = undefined;
            $scope.folder_state = undefined;
        }
        
        if($(event.target)[0].nodeName.toLowerCase() == 'i') $(event.target).parent().parent().children('ul').toggle();
        else $(event.target).parent().children('ul').toggle();
    }// /toggle_folder

});