(function () {
'use strict';
angular
.module('app')
.directive('generalTable', function () {
  return {
  	scope: {
  		data: '=',
  		headers: '=',
  		type: '='
  	},
    templateUrl: 'scripts/app/views/generalTable.html',
    controller: function (alumnoService, carrerasService, dictadosService, docentesAsignadosService, docentesService, inscriptosService, materiasService, usuariosService, $scope, $location, $auth, $state) {
		  var table = this;
		  
		  table.saveUsuario = function(alumno) {
		    usuariosService.guardarUsuario(alumno);
		    location.reload(true);
		  }

		  table.saveAlumno = function(alumno) {
		    alumnoService.guardarAlumno(alumno);
		  }

		  $scope.initScope = function(type) {
		  	switch (type) {
		  		case 'alumno':
				  	$scope.modal = {
								nombre: null,
								apellido: null,
								telefono: null,
								email: null,
								matricula: null
					}
		  			break;
		  		case 'carreras':
		  			$scope.modal = {
		  				desc_carr: null,
		  				plan: null
		  			}
		  			break;

		  		case 'usuarios':
		  			$scope.modal = {
		  				nombre: null,
		  				apellido: null,
		  				email: null,
		  				permiso: null,
		  				estado: null,
		  				usuarioid: null,
		  			}
		  			$scope.permisos = ['Administrador','Docente'];
		  			$scope.estados = ['Activo','Inactivo'];
		  			break;

		  		case 'docenteasignado':
		  			$scope.modal = {
		  				desc_cargo: null,
		  				email: null,
		  				matricula: null
		  			}

		  			$scope.modal.materia = {
		  				desc_mat: null
		  			};

		  			$scope.modal.docente = {
		  				apellido: null,
		  				nombre: null
		  			}
		  			break;

		  		case 'dictados':
		  			$scope.modal = {
		  				cuat: null,
		  				ano: null,
		  				dia_cursada: null,
		  				alt_hor: null,
		  				cant_insc_act: null,
		  				cant_clases: null,
		  				cant_faltas_max: null
		  			}

		  			$scope.modal.materia = {
		  				desc_mat: null
		  			};

		  			$scope.materias = ['Ingenieria de Software I','Ingenieria de Software II','Matematica I','Matematica II'];
		  			break;

		  		case 'docentes':
		  			$scope.modal = {
		  				nombre: null,
		  				apellido: null,
		  				telefono: null
		  			};
		  			break;

		  		case 'inscriptos':
		  			$scope.modal = {
		  				cant_faltas_act: null
		  			}

		  			$scope.modal.alumno = {
		  				nombre: null,
		  				apellido: null
		  			};
		  			
		  			$scope.modal.materia = {
		  				desc_mat: null
		  			}
		  			
		  			$scope.alumnos = ['Ignacio11, Barberis','Gustavo, Medina','Federico, Reale'];
		  			$scope.materias = ['Tesis','Ingenieria de Software I','Ingenieria de Software II','Matematica I','Matematica II','Matematica III','Ingles','Redes I','Redes II','Sistemas Operativos I'];

		  			break;

		  		case 'materias':
		  			$scope.modal = {
		  				desc_mat: null
		  			};

		  			$scope.modal.carrera = {
		  				desc_carr: null,
		  				plan: null
		  			}

		  			$scope.carreras = ['Licenciatura en Sistemas','Ingenieria en Sistemas'];
		  			$scope.planes = ['2017'];

		  			break;

		  		default:
		  			$scope.modal = {}
		  			break;
		  	}
		  }

		  table.openModal = function(type) {
			$scope.initScope(type);
			switch(type) {
			    case 'alumno':
		  			$('#modal-alumno').modal('show');
			        break;

			    case 'carreras':
		  			$('#modal-carrera').modal('show');
			        break;
			    
			    case 'usuarios':
		  			$('#modal-usuario').modal('show');
			        break;
			    
			    case 'docenteasignado':
		  			$('#modal-docasignado').modal('show');
			        break;
			    
			    case 'dictados':
		  			$('#modal-dictado').modal('show');
			        break;
			    
			    case 'docentes':
		  			$('#modal-docente').modal('show');
			        break;
			    
			    case 'inscriptos':
		  			$('#modal-inscripto').modal('show');
			        break;
			    
			    case 'materias':
		  			$('#modal-materia').modal('show');
			        break;
			    
			    default:
			        break;
			}
		  }

		  table.openEditModal = function(data,type) {
			if (data) {
				$scope.initScope(type);
				switch (type) {
					case 'alumno':
						$scope.modal.nombre = data.nombre;
						$scope.modal.apellido = data.apellido;
						$scope.modal.telefono = data.telefono;
						$scope.modal.email = data.email;
						$scope.modal.matricula = data.matricula;
						$('#modal-alumno').modal('show');
						break;

					case 'carreras':
						$scope.modal.desc_carr = data.desc_carr;
						$scope.modal.plan = data.plan;
						$('#modal-carrera').modal('show');
						break;

					case 'usuarios':
						$scope.modal.nombre = data.nombre;
						$scope.modal.apellido = data.apellido;
						$scope.modal.email = data.email;
						$scope.modal.permiso = data.permiso;
						$scope.modal.estado = data.estado;
						$scope.modal.usuarioid = data.id;
						$('#modal-usuario').modal('show');
						break;

					case 'docenteasignado':
						$scope.modal.materia.desc_mat = data.materia.desc_mat;
						$scope.modal.docente.apellido = data.docente.apellido;
						$scope.modal.docente.nombre = data.docente.nombre;
						$scope.modal.desc_cargo = data.desc_cargo;
						$scope.email = data.email;
						$scope.matricula = data.matricula; 
						$('#modal-docasignado').modal('show');

						break;

					case 'dictados':
						$scope.modal.materia.desc_mat = data.materia.desc_mat;
						$scope.modal.cuat = data.cuat;
						$scope.modal.ano = data.ano;
						$scope.modal.dia_cursada = data.dia_cursada;
						$scope.modal.alt_hor = data.alt_hor;
						$scope.modal.cant_insc_act = data.cant_insc_act;
						$scope.modal.cant_clases = data.cant_clases;
						$scope.modal.cant_faltas_max = data.cant_faltas_max;
						$('#modal-dictado').modal('show');
						break;
						
					case 'docentes':
						$scope.modal.nombre = data.nombre;
						$scope.modal.apellido = data.apellido;
						$scope.modal.telefono = data.telefono;
						$('#modal-docente').modal('show');
						break;

					case 'inscriptos':
						$scope.modal.alumno.nombre = data.alumno.nombre;
						$scope.modal.alumno.apellido = data.alumno.apellido;
						$scope.modal.materia.desc_mat = data.materia.desc_mat;
						$('#modal-inscripto').modal('show');
						break;
						
					case 'materias':
						$scope.modal.carrera.desc_carr = data.carrera.desc_carr;
						$scope.modal.carrera.plan = data.carrera.plan;
						$scope.modal.desc_mat = data.desc_mat; 
						$('#modal-materia').modal('show');
						break;

					default:
						break;
				}
			}
		}

	    table.confirmDelete = function(id) {
	      var isConfirmDelete = confirm('Se eliminará el registro '+id+'. Esta seguro?');
	      if (isConfirmDelete) {
		  	usuariosService.deleteUsuario(id);
		  	location.reload(true);
	      } else {
	        return false;
	      }
	    }

	    $scope.table = table;
    },
  };
});
})();
