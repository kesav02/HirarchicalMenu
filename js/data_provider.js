//the Data provider loades the menu strucure from the API
(function(){
    var menuDataService = angular.module('menuDataService', ['ngResource']);

    menuDataService.factory('MenuData', ['$resource',
      function($resource){
        return $resource('data/items.json', {}, {
          query: {method:'GET', isArray:true}
        })
    }]);
    
})();