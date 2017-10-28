(function () {
'use strict';
angular
.module('app')
.directive('navBar', function () {
  return {
    templateUrl: 'scripts/app/views/navbar.html',
    controller: function ($scope, $location, usuariosService) {
      var navbar = this;
      $scope.navbar = navbar;
     
      usuariosService.getUserIdentity().then(function (data) {
	      $scope.username = data.data.nombre +' '+ data.data.apellido;
  	  });
    },
  };
});
})();
