angular
.module('app')
.factory('dictadosService', [
  '$log',
  '$http',
  '$auth',
  dictadoService,
]);

function dictadoService($log, $http, $auth) {

  function getDictado() {
    return $http({ method: "GET", url: '/api/dictado', cache: false });
  }

  function guardarDictado(dictado) {
    return $http({ method: "POST", url: '/api/nuevo-dictado', data: dictado});
  }

  const service = {
    getDictado,
    guardarDictado
  };

  return service;
}
