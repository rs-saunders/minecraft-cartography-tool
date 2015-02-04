# Minecraft Cartography Tool

A tool to help create map walls in minecraft 1.8 or above. This web app was created as a demo of various web technologies and coding practices, including:

* AngularJS - JavaScript framework
* Bootstrap - css responsive framework
* Bower - front end package manager
* npm - back end package manager
* Jasmine - JavaScript testing framework
* Karma - JavaScript test runner
* PhantomJS - headless browser
* live-server - light node web server with auto reload ability

## Installation

The project installs dependancies via npm and bower.

If you don't have npm then follow the steps on the nodejs site
to get it : [http://nodejs.org/download/](http://nodejs.org/download/)

1. Clone the project `git clone https://github.com/rs-saunders/minecraft-cartography-tool.git` 

2. From the root run `npm install`. This should also install bower dependencies automatically

3. To run the application either open index.html in a browser or type `npm start` which makes it available on localhost:8080

4. To run the Jasmine tests type `npm test`

## Usage

It starts Pre configured for a 3x3 map wall aligned centre on coordinates 0,0 facing north. X coordinate from left to right and Z coordinate from top to bottom.

1. Set the starting coordinates to where you want your map wall adjust the other settings to your liking. E.g. centre it on your base. Note: to find your coordinates in minecraft press the F3 key.
2. Create the required number of maps as shown in the stats.
3. Hover mouse over the centre and corners of the start map to view the map coordinates.
4. In game, walk until your inside that map and use one of your blank maps.
5. Repeat steps 3 and 4 for each map in the wall.
6. Create the required number of item frames as shown in the stats the hang them up and place your maps in them


#### Settings
* Coords - set the starting coordinates of the map wall. E.g. where your base is located. Note: to find your coordinates in minecraft press the F3 key.
* Width - adjust how many maps wide you want your map wall
* Height - adjust how many maps tall you want your map wall
* Align - which map on your wall do you want the wall to start at as indicated by the compass. E.g. one of the corners or centrally
* Zoom - what zoom level you want each map to be at. The higher the zoom, the more blocks it covers. Note: to zoom out a map you add x8 more paper to it.

#### Stats
The stats show the total number of each item you need in order to build the current map wall. It shows both the crafted items a compass and also the items that make up the compass i.e. iron ingots and redstone.

## Contributing

1. Fork it!

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am 'Add some feature'`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request :D

## History

* Version 0.1.0: basic feature set.
** Adjust settings, starting coordinates, width, height, alignment and zoom level 
** View the stats in a basic list
** hover over maps to see coordinates

## Impovements

* Ability to change map wall orientation, North, South, East, West
* Display coordinate or each map wall as list
** Hover over the list highlights the map on the wall and vica versa
** Choice of which corner or the centre coordinate to view for each map in the list
* Improve coordinates tooltip on hover of each map
* Click each map to mark it as complete
* Store the name of each completed map e.g. (Map_01) so it makes it easier to put them in the right item frames
* Save map wall settings to browser's web storage so it remembers next time you reload
* Display stats showing which ingredients go into which other ingredients
** e.g. show that iron ingots and redstone go in to make the compasses
* Improve overall site styling
* Add help text

## Refactoring

* Break up index.php into angularjs directives
* Use LessCSS for map wall css
* Concatinate and minify js
* Create sprites for images
* Use Protractor to make end to end tests
* Use grunt to automate build process of items above

## Credits

* Bock assets come from [Faithful 64x64 Texture pack](http://www.minecraftdl.com/faithful-64x64-texture-pack/)
* Item assets come from [Minecraft Wiki](www.minecraftwiki.net/wiki/Minecraft_Wiki)
* Minecraft is a registered trademark of [Mojang](https://mojang.com/) an I am not offiliated with them.

## License

The MIT License (MIT)

Copyright (c) 2015 Richard Saunders

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
