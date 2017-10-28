angular
.module('app')
.factory('alumnoService', [
  '$log',
  '$http',
  '$auth',
  alumnoService,
]);

function alumnoService($log, $http, $auth) {

  function getAlumnos() {
    return $http({ method: "GET", url: '/api/alumno', cache: false });
  }

  function guardarAlumno(alumno) {
    return $http({ method: "POST", url: '/api/crear-alumno', data: alumno});
  }

  const service = {
    getAlumnos,
    guardarAlumno
  };

  return service;
}
