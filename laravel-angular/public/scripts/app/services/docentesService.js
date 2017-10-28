angular
.module('app')
.factory('docentesService', [
  '$log',
  '$http',
  '$auth',
  docenteService,
]);

function docenteService($log, $http, $auth) {

  function getDocente() {
    return $http({ method: "GET", url: '/api/docente', cache: false });
  }

  function guardarDocente(docentes) {
    return $http({ method: "POST", url: '/api/nuevo-docente', data: docente});
  }

  const service = {
    getDocente,
    guardarDocente
  };

  return service;
}
