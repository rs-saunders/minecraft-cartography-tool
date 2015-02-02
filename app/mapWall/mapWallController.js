/**
 * Watches for any change in config and updates the map wall
 */
mapWallApp.controller('MapWallCtrl', function ($scope) {

  $scope.mapWall = new MapWall();
  
  $scope.$watchCollection("mapWall.config", function(newValue, oldValue) {
  	$scope.mapWall.updateMapWall();
  }); 
   
});