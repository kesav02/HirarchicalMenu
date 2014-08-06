(function(){

    //The Menu Service loades the menu data from the MenuData Factory, massage it a bit and return to the Controller
    var menuServiceProvider = angular.module('menuServiceProvider', ['menuDataService']);

    menuServiceProvider.service('Menu', ['MenuData', function(MenuData) {
        this.get = function() { 
            var deferred = $.Deferred()
            var menuItems = [];

            MenuData.query({},function(dataReturned){
                menuItems = dataReturned;
                // Need to fix 2 things in the data structure, to make our life easier later with angular
                // 1. Mark root elements with parent = 0
                for (var i = 0; i < menuItems.length; i ++){
                    if (typeof menuItems[i].parent == "undefined"){
                        menuItems[i].parent = 0;
                    }
                    var bFoundChild = false;
                    //
                    // 2. Mark elements if they have child elements
                    for (var j = 0; j <  menuItems.length; j ++){
                        if (j != i){ // should not compare item to itself :)
                            if ( menuItems[i].id ==  menuItems[j].parent ){
                                bFoundChild = true;
                                break;
                            }
                        }
                    }
                    if (bFoundChild){
                        menuItems[i].HasChild = true;
                    }
                    else{
                        menuItems[i].HasChild = false;
                    }
                }
                deferred.resolve(menuItems);
            });
        return deferred.promise();
        };
    }]);
})();
