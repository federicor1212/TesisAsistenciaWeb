(function () {
'use strict';
angular
.module('app')
.directive('sideBar', function () {
  return {
    templateUrl: 'scripts/app/views/sidebar.html',
    controller: function ($rootScope, $scope) {
      $scope.activeMenu = '';
	  $scope.setActive = function(menuSelected) {
	  	return 'carrera'
	  }
      var sidebar = this;
      $scope.sidebar = sidebar;
	  	$scope.activeMenu = 'alumnos';
    },
  };
});
})();
