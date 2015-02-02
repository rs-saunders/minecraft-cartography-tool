describe("Testing the MapWall calc functions: ", function() {
 
  var mapWall;

  beforeEach(function() {
    mapWall = new MapWall();
  });

  it("calcStartMap", function() {

    //odd sized map wall
    expect(mapWall.calcStartMap(3, 3, mapWall.settings.align.TOP_LEFT))
    	.toEqual({ c: 0, r: 0 });

	  expect(mapWall.calcStartMap(3, 3, mapWall.settings.align.TOP_RIGHT))
    	.toEqual({ c: 2, r: 0 });

    expect(mapWall.calcStartMap(3, 3, mapWall.settings.align.CENTRE))
    	.toEqual({ c: 1, r: 1 });

    expect(mapWall.calcStartMap(3, 3, mapWall.settings.align.BOTTOM_LEFT))
    	.toEqual({ c: 0, r: 2 });

    expect(mapWall.calcStartMap(3, 3, mapWall.settings.align.BOTTOM_RIGHT))
    	.toEqual({ c: 2, r: 2 });

    //even sized map wall
    expect(mapWall.calcStartMap(4, 4, mapWall.settings.align.TOP_LEFT))
    	.toEqual({ c: 0, r: 0 });

	expect(mapWall.calcStartMap(4, 4, mapWall.settings.align.TOP_RIGHT))
    	.toEqual({ c: 3, r: 0 });

    expect(mapWall.calcStartMap(4, 4, mapWall.settings.align.CENTRE))
    	.toEqual({ c: 1, r: 1 });

    expect(mapWall.calcStartMap(4, 4, mapWall.settings.align.BOTTOM_LEFT))
    	.toEqual({ c: 0, r: 3 });

    expect(mapWall.calcStartMap(4, 4, mapWall.settings.align.BOTTOM_RIGHT))
    	.toEqual({ c: 3, r: 3 });

  });
});
