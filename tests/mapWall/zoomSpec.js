describe("Testing MapWall Zoom Level: ", function() {

  var mapWall;

  beforeEach(function() {
    mapWall = new MapWall();
  });
  
  it("zoom level 1", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 1,
      rows: 1,
      zoom: 1,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWall();

    expect(mapWall.stats).toEqual({
      maps: {
        x: 1,
        z: 1,
        area: 1
      },
      chunks: {
        x: 16,
        z: 16,
        area: 256
      },
      blocks: {
        x: 256,
        z: 256,
        area: 65536
      },
      recipe: {
        paper: 16,
        compass: 1,
        sugarcane: 16,
        iron: 4,
        redstone: 1,
        logs: 1,
        planks: 4,
        sticks: 8,
        leather: 1,
        itemFrames: 1
      }
    });

    expect(mapWall.grid).toEqual([
      [{
        topLeft:     { x: -64, z: -64 },
        topRight:    { x: 192, z: -64 },
        centre:      { x:  64, z:  64 },
        bottomLeft:  { x: -64, z: 192 },
        bottomRight: { x: 192, z: 192 },
        start: true
      }]
    ]);

  });

  it("zoom level 2", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 1,
      rows: 1,
      zoom: 2,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWall();

    expect(mapWall.stats).toEqual({
      maps: {
        x: 1,
        z: 1,
        area: 1
      },
      chunks: {
        x: 32,
        z: 32,
        area: 1024
      },
      blocks: {
        x: 512,
        z: 512,
        area: 262144
      },
      recipe: {
        paper: 24,
        compass: 1,
        sugarcane: 24,
        iron: 4,
        redstone: 1,
        logs: 1,
        planks: 4,
        sticks: 8,
        leather: 1,
        itemFrames: 1
      }
    });

    expect(mapWall.grid).toEqual([
      [{
        topLeft:     { x: -64, z: -64 },
        topRight:    { x: 448, z: -64 },
        centre:      { x: 192, z: 192 },
        bottomLeft:  { x: -64, z: 448 },
        bottomRight: { x: 448, z: 448 },
        start: true
      }]
    ]);

  });

  it("zoom level 3", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 1,
      rows: 1,
      zoom: 3,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWall();

    expect(mapWall.stats).toEqual({
      maps: {
        x: 1,
        z: 1,
        area: 1
      },
      chunks: {
        x: 64,
        z: 64,
        area: 4096
      },
      blocks: {
        x: 1024,
        z: 1024,
        area: 1048576
      },
      recipe: {
        paper: 32,
        compass: 1,
        sugarcane: 32,
        iron: 4,
        redstone: 1,
        logs: 1,
        planks: 4,
        sticks: 8,
        leather: 1,
        itemFrames: 1
      }
    });

    expect(mapWall.grid).toEqual([
      [{
        topLeft:     { x: -64, z: -64 },
        topRight:    { x: 960, z: -64 },
        centre:      { x: 448, z: 448 },
        bottomLeft:  { x: -64, z: 960 },
        bottomRight: { x: 960, z: 960 },
        start: true
      }]
    ]);

  });

  it("zoom level 4", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 1,
      rows: 1,
      zoom: 4,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWall();

    expect(mapWall.stats).toEqual({
      maps: {
        x: 1,
        z: 1,
        area: 1
      },
      chunks: {
        x: 128,
        z: 128,
        area: 16384
      },
      blocks: {
        x: 2048,
        z: 2048,
        area: 4194304
      },
      recipe: {
        paper: 40,
        compass: 1,
        sugarcane: 40,
        iron: 4,
        redstone: 1,
        logs: 1,
        planks: 4,
        sticks: 8,
        leather: 1,
        itemFrames: 1
      }
    });

    expect(mapWall.grid).toEqual([
      [{
        topLeft:     { x:  -64, z:  -64 },
        topRight:    { x: 1984, z:  -64 },
        centre:      { x:  960, z:  960 },
        bottomLeft:  { x:  -64, z: 1984 },
        bottomRight: { x: 1984, z: 1984 },
        start: true
      }]
    ]);
  });
});