describe("Testing the MapWall Size: ", function() {
 
  var mapWall;

  beforeEach(function() {
    mapWall = new MapWall();
  });

  it("1x1 map wall", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 1,
      rows: 1,
      zoom: 0,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWallGrid();

    expect(mapWall.grid).toEqual([
      [{
        topLeft:     { x: -64, z: -64 },
        topRight:    { x:  64, z: -64 },
        centre:      { x:   0, z:   0 },
        bottomLeft:  { x: -64, z:  64 },
        bottomRight: { x:  64, z:  64 },
        start: true
      }]
    ]);
  });

  it("3x3 map wall", function() {
    
    mapWall.config = {
      coords: "0,0",
      columns: 3,
      rows: 3,
      zoom: 0,
      orientation: 'n',
      align: mapWall.settings.align.TOP_LEFT
    };

    mapWall.updateMapWallGrid();

    expect(mapWall.grid).toEqual([
      [ 
        {
          topLeft:     { x: -64, z: -64 },
          topRight:    { x:  64, z: -64 },
          centre:      { x:   0, z:   0 },
          bottomLeft:  { x: -64, z:  64 },
          bottomRight: { x:  64, z:  64 },
          start: true
        },
        {
          topLeft:     { x:  64, z: -64 },
          topRight:    { x: 192, z: -64 },
          centre:      { x: 128, z:   0 },
          bottomLeft:  { x:  64, z:  64 },
          bottomRight: { x: 192, z:  64 },
          start: false
        },
        {
          topLeft:     { x: 192, z: -64 },
          topRight:    { x: 320, z: -64 },
          centre:      { x: 256, z:   0 },
          bottomLeft:  { x: 192, z:  64 },
          bottomRight: { x: 320, z:  64 },
          start: false
        }
      ],
      [ 
        {
          topLeft:     { x: -64, z:  64 },
          topRight:    { x:  64, z:  64 },
          centre:      { x:   0, z: 128 },
          bottomLeft:  { x: -64, z: 192 },
          bottomRight: { x:  64, z: 192 },
          start: false
        },
        {
          topLeft:     { x:  64, z:  64 },
          topRight:    { x: 192, z:  64 },
          centre:      { x: 128, z: 128 },
          bottomLeft:  { x:  64, z: 192 },
          bottomRight: { x: 192, z: 192 },
          start: false
        },
        {
          topLeft:     { x: 192, z:  64 },
          topRight:    { x: 320, z:  64 },
          centre:      { x: 256, z: 128 },
          bottomLeft:  { x: 192, z: 192 },
          bottomRight: { x: 320, z: 192 },
          start: false
        }
      ],
      [ 
        {
          topLeft:     { x: -64, z: 192 },
          topRight:    { x:  64, z: 192 },
          centre:      { x:   0, z: 256 },
          bottomLeft:  { x: -64, z: 320 },
          bottomRight: { x:  64, z: 320 },
          start: false
        },
        {
          topLeft:     { x:  64, z: 192 },
          topRight:    { x: 192, z: 192 },
          centre:      { x: 128, z: 256 },
          bottomLeft:  { x:  64, z: 320 },
          bottomRight: { x: 192, z: 320 },
          start: false
        },
        {
          topLeft:     { x: 192, z: 192 },
          topRight:    { x: 320, z: 192 },
          centre:      { x: 256, z: 256 },
          bottomLeft:  { x: 192, z: 320 },
          bottomRight: { x: 320, z: 320 },
          start: false
        }
      ]
    ]);
  });
});