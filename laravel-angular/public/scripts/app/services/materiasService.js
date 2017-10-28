angular
.module('app')
.factory('materiasService', [
  '$log',
  '$http',
  '$auth',
  materiasService,
]);

function materiasService($log, $http, $auth) {

  function getMaterias() {
    return $http({ method: "GET", url: '/api/materia', cache: false });
  }

  function guardarMaterias(materia) {
    return $http({ method: "POST", url: '/api/crear-materia', data: materia});
  }

  const service = {
    getMaterias,
    guardarMaterias
  };

  return service;
}
