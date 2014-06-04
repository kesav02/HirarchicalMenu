HirarchicalMenu
===============
I used the following samples & FWs:

1. Bootstrap 3.1.1. for the basic styles to avoid mobile view. I customized it to avoid from collapsing menu on narrow view.
I guess I could do without it but I am used to start with it.
I did not implement css pre-compiler (like LESS), but hard coded the values in the css, if taking this one into production, I would do that to make the maintenance easier.

2. Angular JS - to manage Ajax calls and binding the menu to the template. I had hard coded the limitation of 4 levels menu with 4 ng-repeat loops

3. CSS Pseudo elements - to get the "speech bubble" graphics. I used http://ilikepixels.co.uk/bubbler-css-speech-bubble-generator/
I had to create another Pseudo elements myself so the Sub menu is not closed when hovering on the space between the menu. I guess this was the tricky part :-)

4. Basic menu logic and structure is taken from a nice tutorial I found - http://www.kriesi.at/archives/create-a-multilevel-dropdown-menu-with-css-and-improve-it-via-jquery
