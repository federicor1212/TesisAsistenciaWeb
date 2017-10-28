angular
.module('app')
.factory('carrerasService', [
  '$log',
  '$http',
  '$auth',
  carrerasService,
]);

function carrerasService($log, $http, $auth) {

  function getCarrera() {
    return $http({ method: "GET", url: '/api/carrera', cache: false });
  }

  function guardarCarrera(carrera) {
    return $http({ method: "POST", url: '/api/crear-carrera', data: carreras});
  }

  const service = {
    getCarrera,
    guardarCarrera
  };

  return service;
}
