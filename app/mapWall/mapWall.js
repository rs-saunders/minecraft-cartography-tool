function MapWall() {
	
};
	
/**
 * Configurable values for a map wall
 */
MapWall.prototype.config = {
	coords: "0,0",
	columns: 3,
	rows: 3,
	zoom: 0,
	orientation: "n",
	align: 0
};

/**
 * Constants used in calculating a map wall 
 */
MapWall.prototype.settings = {
	blocksInMap: 128,
	blocksInChunk: 16,
	gridOffset: 64,
	zoomMultiplier: [1,2,4,8,16],
	align: {
		CENTRE: 0,
		TOP_LEFT: 1,
		TOP_RIGHT: 2,
		BOTTOM_LEFT: 3,
		BOTTOM_RIGHT: 4,
	}
};

/**
 * Contstant amount of each ingredient that goes into maping 1 map and its item fram
 */
MapWall.prototype.recipe = {
	compass: 1,
	paper: 8,	
	sugarcane: 8,
	iron: 4,
	redstone: 1,
	logs: 1,
	planks: 4,
	sticks: 8,
	leather: 1,
	itemFrames: 1
};

/**
 * Stats about the map wall calculated by running this.updateMapWallStats()
 */
MapWall.prototype.stats = {
	maps: {
		x: 0,
		z: 0,
		area: 0
	},
	chunks: {
		x: 0,
		z: 0,
		area: 0	
	},
	blocks: {
		x: 0,
		z: 0,
		area: 0
	},
	recipe: {
		paper: 0,
		compass: 0,
		sugarcane: 0,
		iron: 0,
		redstone: 0,
		logs: 0,
		planks: 0,
		sticks: 0,
		leather: 0,
		itemFrames: 0
	}	
};

/**
 * 2D array of maps with coordinates after running this.updateMapWallGrid()
 */
MapWall.prototype.grid = [];

/**
 * Validates the config and updates the map wall stats and grid.
 */
MapWall.prototype.updateMapWall = function() {
	if(this.config.coords 
  	&& this.config.rows 
  	&& this.config.columns 
  	&& this.config.align != undefined 
  	&& this.config.zoom != undefined) {
  		
		this.updateMapWallGrid();
		this.updateMapWallStats();
	}
};

/**
 * Calculates the width in blocks of each map at the configured zoom level
 * @var int zoom - the zoom level the map should be set to (0 to 4)
 * @return int
 */
MapWall.prototype.calcMapWidth = function(zoom) {
	if(!zoom) return this.settings.blocksInMap;
	return this.settings.blocksInMap * this.settings.zoomMultiplier[zoom];
}

/**
 * Calculates which map on the grid is the starting map for the configures alignment
 * @var int columns - the number of columns in the map wall
 * @var int rows - the number of rows in the map wall
 * @var int align - the alignment of the map wall
 * @return object - { c: 0, r: 0 } - the column and row of the start map on the grid
 */
MapWall.prototype.calcStartMap = function(columns, rows, align) {
	
	//grid starts at 0
	columns -= 1;
	rows -= 1;

	switch(parseInt(align)) {
		
		default:
		case this.settings.align.TOP_LEFT:
			return { c: 0, r: 0 };

		case this.settings.align.TOP_RIGHT:
			return { c: columns, r: 0 };

		case this.settings.align.BOTTOM_LEFT:
			return { c: 0, r: rows };

		case this.settings.align.BOTTOM_RIGHT:
			return { c: columns, r: rows };

		case this.settings.align.CENTRE:
			return { c: Math.floor(columns / 2), r: Math.floor(rows / 2) };
	}
}

/**
 * Aligns a given coordinate to the grid. coordinate being either the x or the z axis, not both 
 * The grid is aligned t0 the topLeft of a map (0,0 is the centre of a map) so a gridOffset is applied to correct for that
 * The cooridinate is then offset again to make the start map align to where it should be. 
 * i.e. if its a 3x3 map and aligned centre then the coord is offset by 1 map
 * @var int coord - the coordinate value to align
 * @var int mapWidth - the width of a single map
 * @var int startOffset - how many maps to offset the coord so the start map is in the correct place
 * @return int
 */
MapWall.prototype.alignToGrid = function(coord, mapWidth, startOffset) {
	return (Math.floor((coord+this.settings.gridOffset)  / mapWidth) * mapWidth) - this.settings.gridOffset - (mapWidth * startOffset);
};

/**
 * updates the map wall stats based on the current config
 */
MapWall.prototype.updateMapWallStats = function() {
	
	var blocksInMap = this.calcMapWidth(this.config.zoom);
	
	this.stats.maps.x = this.config.columns;
	this.stats.maps.z = this.config.rows;
	this.stats.maps.area = this.stats.maps.x * this.stats.maps.z;	
	
	this.stats.blocks.x = this.stats.maps.x * blocksInMap;
	this.stats.blocks.z = this.stats.maps.z * blocksInMap;
	this.stats.blocks.area = this.stats.blocks.x * this.stats.blocks.z;	
	
	this.stats.chunks.x = this.stats.blocks.x / this.settings.blocksInChunk;
	this.stats.chunks.z = this.stats.blocks.z / this.settings.blocksInChunk;
	this.stats.chunks.area = this.stats.chunks.x * this.stats.chunks.z;	
	
	this.stats.recipe.sugarcane = (this.recipe.sugarcane * (this.config.zoom + 1)) * this.stats.maps.area;
	this.stats.recipe.paper = (this.recipe.paper * (this.config.zoom + 1)) * this.stats.maps.area;
	this.stats.recipe.iron = this.recipe.iron * this.stats.maps.area;
	this.stats.recipe.redstone = this.recipe.redstone * this.stats.maps.area;
	this.stats.recipe.compass = this.recipe.compass * this.stats.maps.area;
	
	this.stats.recipe.logs = this.recipe.logs * this.stats.maps.area;
	this.stats.recipe.planks = this.recipe.planks * this.stats.maps.area;
	this.stats.recipe.sticks = this.recipe.sticks * this.stats.maps.area;
	this.stats.recipe.leather = this.recipe.leather * this.stats.maps.area;
	this.stats.recipe.itemFrames = this.recipe.itemFrames * this.stats.maps.area;
};

/**
 * updates the map wall grid based on the current config
 */
MapWall.prototype.updateMapWallGrid = function() {
	  
	var mapWidth = this.calcMapWidth(this.config.zoom);

	var halfMapWidth = mapWidth / 2;

	var startMap = this.calcStartMap(this.config.columns, this.config.rows, this.config.align);

	var coords = this.config.coords.split(",");
	var xStartCoord = parseInt(coords[0]);
	var zStartCoord = parseInt(coords[1]);

	//get rid of too many grid
	if(this.grid.length > this.config.rows) {
		this.grid = this.grid.splice(0, this.config.rows);
	}
	
	var vAxis = this.alignToGrid(zStartCoord, mapWidth, startMap.r);
	
	for(var r = 0; r < this.config.rows; r++) {
		 
		//init column if not set
		if(!this.grid[r]) this.grid[r] = [];
		
		//get rid of too many columns
		if(this.grid[r].length > this.config.columns) {
			this.grid[r] = this.grid[r].splice(0, this.config.columns);
		}
  
		var hAxis = this.alignToGrid(xStartCoord, mapWidth, startMap.c);
		
		for(var c = 0; c < this.config.columns; c++) {
			  
			  this.grid[r][c] = { 
				  topLeft:     { x:  hAxis				  , z:  vAxis },
				  topRight:    { x: (hAxis + mapWidth)	  , z:  vAxis },
				  centre:      { x: (hAxis + halfMapWidth), z: (vAxis + halfMapWidth) },
				  bottomLeft:  { x:  hAxis				  , z: (vAxis + mapWidth) },
				  bottomRight: { x: (hAxis + mapWidth)	  , z: (vAxis + mapWidth) },
				  start:       (c == startMap.c && r == startMap.r)
			  };
			  
			  hAxis += mapWidth;
			  
		}
		vAxis += mapWidth;
	}
};