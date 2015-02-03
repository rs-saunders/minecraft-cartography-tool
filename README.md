# Minecraft Cartography Tool

* http://binaryitch.co.uk/minecraft-cartography-tool/

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

Stats


## Contributing

1. Fork it!

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am 'Add some feature'`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License
