angular
.module('app')
.factory('inscriptosService', [
  '$log',
  '$http',
  '$auth',
  inscriptosService,
]);

function inscriptosService($log, $http, $auth) {

  function getInscriptos() {
    return $http({ method: "GET", url: '/api/inscripto', cache: false });
  }

  function guardarInscriptos(inscripto) {
    return $http({ method: "POST", url: '/api/nuevo-inscripto', data: inscripto});
  }

  const service = {
    getInscriptos,
    guardarInscriptos
  };

  return service;
}
