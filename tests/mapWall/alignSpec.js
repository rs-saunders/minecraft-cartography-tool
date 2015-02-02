describe("Testing MapWall alignToGrid: ", function() {

  var mapWall;
  
  beforeEach(function() {
    mapWall = new MapWall();
  });
  
  describe("zoom level 0: ", function() {
    
      it("last block previous map", function() {
        expect(mapWall.alignToGrid(-65, 128, 0))
          .toEqual(-192);
      });

      it("first block", function() {
        expect(mapWall.alignToGrid(-64, 128, 0))
          .toEqual(-64);
      });

      it("centre block", function() {
        expect(mapWall.alignToGrid(0, 128, 0))
          .toEqual(-64);
      });

      it("last block", function() {
        expect(mapWall.alignToGrid(63, 128, 0))
          .toEqual(-64);
      });

      it("first block next map", function() {
        expect(mapWall.alignToGrid(64, 128, 0))
          .toEqual(64);
      });

      it("last block next map", function() {
        expect(mapWall.alignToGrid(191, 128, 0))
          .toEqual(64);
      });

      it("first block map after next", function() {
        expect(mapWall.alignToGrid(192, 128, 0))
          .toEqual(192);
      });
  });

  describe("zoom level 1: ", function() {
    
      it("last block previous map", function() {
        expect(mapWall.alignToGrid(-65, 256, 0))
          .toEqual(-320);
      });

      it("first block", function() {
        expect(mapWall.alignToGrid(-64, 256, 0))
          .toEqual(-64);
      });

      it("centre block", function() {
        expect(mapWall.alignToGrid(0, 256, 0))
          .toEqual(-64);
      });
    
      it("last block", function() {
        expect(mapWall.alignToGrid(191, 256, 0))
          .toEqual(-64);
      });

      it("first block next map", function() {
        expect(mapWall.alignToGrid(192, 256, 0))
          .toEqual(192);
      });

      it("last block next map", function() {
        expect(mapWall.alignToGrid(447, 256, 0))
          .toEqual(192);
      });

      it("first block map after next", function() {
        expect(mapWall.alignToGrid(448, 256, 0))
          .toEqual(448);
      });
  });

  describe("zoom level 2: ", function() {
    
      it("last block previous map", function() {
        expect(mapWall.alignToGrid(-65, 512, 0))
          .toEqual(-576);
      });

      it("first block", function() {
        expect(mapWall.alignToGrid(-64, 512, 0))
          .toEqual(-64);
      });

      it("centre block", function() {
        expect(mapWall.alignToGrid(0, 512, 0))
          .toEqual(-64);
      });
    
      it("last block", function() {
        expect(mapWall.alignToGrid(447, 512, 0))
          .toEqual(-64);
      });

      it("first block next map", function() {
        expect(mapWall.alignToGrid(448, 512, 0))
          .toEqual(448);
      });

      it("last block next map", function() {
        expect(mapWall.alignToGrid(959, 512, 0))
          .toEqual(448);
      });

      it("first block map after next", function() {
        expect(mapWall.alignToGrid(960, 512, 0))
          .toEqual(960);
      });
  });

  describe("zoom level 3: ", function() {
    
      it("last block previous map", function() {
        expect(mapWall.alignToGrid(-65, 1024, 0))
          .toEqual(-1088);
      });

      it("first block", function() {
        expect(mapWall.alignToGrid(-64, 1024, 0))
          .toEqual(-64);
      });

      it("centre block", function() {
        expect(mapWall.alignToGrid(0, 1024, 0))
          .toEqual(-64);
      });
    
      it("last block", function() {
        expect(mapWall.alignToGrid(959, 1024, 0))
          .toEqual(-64);
      });

      it("first block next map", function() {
        expect(mapWall.alignToGrid(960, 1024, 0))
          .toEqual(960);
      });

      it("last block next map", function() {
        expect(mapWall.alignToGrid(1983, 1024, 0))
          .toEqual(960);
      });

      it("first block map after next", function() {
        expect(mapWall.alignToGrid(1984, 1024, 0))
          .toEqual(1984);
      });
  });

  describe("zoom level 4: ", function() {
    
      it("last block previous map", function() {
        expect(mapWall.alignToGrid(-65, 2048, 0))
          .toEqual(-2112);
      });

      it("first block", function() {
        expect(mapWall.alignToGrid(-64, 2048, 0))
          .toEqual(-64);
      });

      it("centre block", function() {
        expect(mapWall.alignToGrid(0, 2048, 0))
          .toEqual(-64);
      });
    
      it("last block", function() {
        expect(mapWall.alignToGrid(1983, 2048, 0))
          .toEqual(-64);
      });

      it("first block next map", function() {
        expect(mapWall.alignToGrid(1984, 2048, 0))
          .toEqual(1984);
      });

      it("last block next map", function() {
        expect(mapWall.alignToGrid(4031, 2048, 0))
          .toEqual(1984);
      });

      it("first block map after next", function() {
        expect(mapWall.alignToGrid(4032, 2048, 0))
          .toEqual(4032);
      });
  });

  describe("random: ", function() {
    
      it("last block previous map, start 3 maps over", function() {
        expect(mapWall.alignToGrid(-65, 2048, 2))
          .toEqual(-6208);
      });
  });
});
