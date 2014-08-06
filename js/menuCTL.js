var menuControllers = angular.module('menuControllers', []);

//Menu Controller -
//Inject the data it into $scope
menuControllers.controller('menuController', [ '$scope', 'Menu', function ($scope, Menu) {
    $scope.menuItems = [];
    Menu.get().then(function(data){
        $scope.menuItems = data;
    });
}]);

//
