describe("Testing the MapWall Stats: ", function() {
 
  var mapWall;

  beforeEach(function() {
    mapWall = new MapWall();
  });

  it("1x1 size map wall", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 1,
      rows: 1,
      zoom: 0,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWallStats();

    expect(mapWall.stats).toEqual({
      maps: {
        x: 1,
        z: 1,
        area: 1
      },
      chunks: {
        x: 8,
        z: 8,
        area: 64 
      },
      blocks: {
        x: 128,
        z: 128,
        area: 16384
      },
      recipe: {
        paper: 8,
        compass: 1,
        sugarcane: 8,
        iron: 4,
        redstone: 1,
        logs: 1,
        planks: 4,
        sticks: 8,
        leather: 1,
        itemFrames: 1
      }
    });
  });

  it("3x3 size map wall", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 3,
      rows: 3,
      zoom: 0,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWallStats();

    expect(mapWall.stats).toEqual({
      maps: {
        x: 3,
        z: 3,
        area: 9
      },
      chunks: {
        x: 24,
        z: 24,
        area: 576 
      },
      blocks: {
        x: 384,
        z: 384,
        area: 147456
      },
      recipe: {
        paper: 72,
        compass: 9,
        sugarcane: 72,
        iron: 36,
        redstone: 9,
        logs: 9,
        planks: 36,
        sticks: 72,
        leather: 9,
        itemFrames: 9
      }
    });
  });
});