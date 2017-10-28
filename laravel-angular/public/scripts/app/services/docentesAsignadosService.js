angular
.module('app')
.factory('docentesAsignadosService', [
  '$log',
  '$http',
  '$auth',
  docentesAsignadosService,
]);

function docentesAsignadosService($log, $http, $auth) {

  function getDocenteAsignado() {
    return $http({ method: "GET", url: '/api/docente-asignado', cache: false });
  }

  function guardarDocenteAsignado(docenteAsignado) {
    return $http({ method: "POST", url: '/api/asignar-docente', data: docenteAsignado});
  }

  const service = {
    getDocenteAsignado,
    guardarDocenteAsignado
  };

  return service;
}
