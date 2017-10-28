angular
.module('app')
.factory('usuariosService', [
  '$log',
  '$http',
  '$auth',
  usuariosService,
]);

function usuariosService($log, $http, $auth) {

  function getUsuarios() {
    return $http({ method: "GET", url: '/api/usuario', cache: false });
  }

  function guardarUsuario(usuario) {
    return $http({ method: "POST", url: '/api/crear-usuario', data: usuario});
  }

  function getUserIdentity() {
    return $http({ method: "POST", url: '/api/identity', data: {'token': localStorage.getItem('token')} })
  }

  const service = {
    getUsuarios,
    guardarUsuario,
    getUserIdentity
  };

  return service;
}
