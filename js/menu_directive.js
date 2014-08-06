(function(){
    var menuDirective = angular.module('menuDirective', []);

    menuDirective.directive('menu', function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                menu: '=menu',
                menus: '=menus',
                menuLevel: '=menuLevel'
            },    
            link: function (scope, element, attrs) {
                var menuClassName = 'zz-top-navigatio-menu-text';
                var html = "";
                if (scope.menuLevel == "1")
                    html = '<li><a href="#" class="' + menuClassName + '">{{menu.name}}</a>';
                else
                    html = '<li class=" zz-parent-menu  zz-submenu-right-padding">' + 
                    '<div data-id="{{menu.id}}" class="zz-submenu zz-submenu_underline">{{menu.name}}</div>';
                //
                if (scope.menu.HasChild){
                    var nextLevel = parseInt(scope.menuLevel) + 1;
                    var ulClass = "";
                    if (scope.menuLevel == "1")
                        ulClass = "nav zz-bubble zz-top-speech zz-menu-hidden";
                    else 
                        ulClass = "nav zz-bubble zz-left-speech zz-menu-hidden";

                    html = html + '<ul class="' + ulClass + '">';
                    html = html + '<menu ng-repeat="child_menu in menus| filter:{parent:menu.id}" data-menu="child_menu" ' +
                        'data-menus="menus" data-menu-level="' + nextLevel + '"></menu>';
                    html = html + '</ul>';
                }
                html = html + '</li>';
                var e = $compile(html)(scope);
                element.replaceWith(e);

                mainmenu();
              }
        };
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
})();