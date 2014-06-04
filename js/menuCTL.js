//Create the angular app:
var handyByApp = angular.module('menuAngular', [
]);

//Menu Controller -
//loads the menu staructure from the server 
//Massage the data just a bit
//Inject the data it into $scope
function menuControler($scope, $http){

	//Loading the menu items from the server 
	$http.get('data/items.json').then(function(res) {
		var menu = res.data;
		//
		// Need to fix 2 things in the data structure, to make our life easier later with angular
		// 1. Mark root elements with parent = 0
		for (var i = 0; i < menu.length; i ++){
			if (typeof menu[i].parent == "undefined"){
				menu[i].parent = 0;
			}
			var bFoundChild = false;
			//
			// 2. Mark elements if they have child elements
			for (var j = 0; j <  menu.length; j ++){
				if (j != i){ // should not compare item to itself :)
					if ( menu[i].id ==  menu[j].parent ){
						bFoundChild = true;
						break;
					}
				}
			}

			if (bFoundChild){
				menu[i].HasChild = true;
			}
			else{
				menu[i].HasChild = false;
			}
		}
		//
		$scope.menuIntems = menu;
		//Once the data is loaded, wait for idle time and inject the event handlers  
		setTimeout(function() {
			mainmenu();
		}, 20);
	});
	
	function mainmenu(){
	//$(" #nav ul ").css({display: "none"}); // Opera Fix
	$(" #nav li").hover(function(){
			$(this).find('.zz-bubble:first').css({visibility: "visible",display: "none"}).show(0);
			
				if ($(this).data("level") == "1"){
					$(this).addClass("zz-top-menu-selected");
				}
		
			},function(){
				$(this).find('.zz-bubble:first').css({visibility: "hidden"});
			
				if ($(this).data("level") == "1"){
					$(this).removeClass("zz-top-menu-selected");
				}
			});
	}
}	
	
	
/* Data for debug, in case needed:
var menu = [
{"id": 1, "url": "/item_1", "name": "Home"},
{"id": 23, "url": "/item_23", "name": "Clothing"},
{"id": 51, "url": "/item_51", "name": "Shirts", "parent": 23},
{"id": 31, "url": "/item_31", "name": "Shoes"},
{"id": 17, "url": "/item_17", "name": "Gift", "parent": 61},
{"id": 24, "url": "/item_24", "name": "Accesories"},
{"id": 5, "url": "/item_5", "name": "Dresses", "parent": 23},
{"id": 21, "url": "/item_21", "name": "Level 3", "parent": 52},
{"id": 52, "url": "/item_52", "name": "Level 2", "parent": 15},
{"id": 15, "url": "/item_15", "name": "Blue Jeans", "parent": 23},
{"id": 35, "url": "/item_35", "name": "Jewelry"},
{"id": 30, "url": "/item_30", "name": "Level 3", "parent": 52},
{"id": 9, "url": "/item_9", "name": "Gift", "parent": 61},
{"id": 22, "url": "/item_22", "name": "Level 3", "parent": 52},
{"id": 38, "url": "/item_38", "name": "Gift", "parent": 61},
{"id": 4, "url": "/item_4", "name": "Level 2", "parent": 15},
{"id": 7, "url": "/item_7", "name": "Level 3", "parent": 52},
{"id": 60, "url": "/item_60", "name": "Level 2", "parent": 15},
{"id": 2, "url": "/item_2", "name": "Bla bla bla", "parent": 23},
{"id": 3, "url": "/item_3", "name": "Sweaters", "parent": 23},
{"id": 47, "url": "/item_47", "name": "Item 47", "parent": 8},
{"id": 13, "url": "/item_13", "name": "Level 2", "parent": 15},
{"id": 39, "url": "/item_39", "name": "Gift", "parent": 61},
{"id": 61, "url": "/item_61", "name": "Gifts"}
];*/
