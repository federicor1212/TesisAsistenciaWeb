<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Usuario;
use Hash;
use App\Enums\Status;
use App\Enums\UserRoles;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuthExceptions\JWTException;

class UsuarioController extends Controller
{

    public function getAuthenticatedUser(Request $request)
    {
        $user = JWTAuth::toUser($request->get('token'));
        
        return $user;
    }

    public function index($id = null) {
      
      if ($id == null){
        $usuario = Usuario::all();

        foreach ($usuario as $u) {
            if ($u['permiso'] == UserRoles::ADMIN) {
                $u['permiso'] = 'Administrador';
            } else {
                $u['permiso'] = 'Docente';
            }

            if ($u['estado'] == Status::ACTIVO) {
                $u['estado'] = 'Activo';
            } else {
                $u['estado'] = 'Inactivo';
            }
        }
        return $usuario;
      } else {
        return Usuario::find($id);
      }
    }

    public function show($id) {
        return Usuario::find($id);
    }

    public function store(Request $request) {
        $usuario = new Usuario;
        $usuario->nombre = $request->input('nombre');
        $usuario->apellido = $request->input('apellido');
        $usuario->email = $request->input('email');
        $usuario->password = Hash::make($request->input('password'));
        $usuario->permiso = $request->input('permiso');
        $usuario->estado = $request->input('estado');
        $usuario->save();

        return 'Usuario record successfully created with id' . $usuario->id;
    }
    
    public function update(Request $request, $id) {
        $usuario = Usuario::find($id);
        $usuario->nombre = $request->input('nombre');
        $usuario->apellido = $request->input('apellido');
        $usuario->email = $request->input('email');
        $usuario->password = Hash::make($request->input('password'));
        $usuario->permiso = $request->input('permiso');
        $usuario->estado = $request->input('estado');
        $usuario->save();
        return 'Usuario record successfully updated with id ' . $usuario->id;
    }
    public function destroy($id) {
        $usuario = Usuario::find($id)->delete();
        return 'Usuario record successfully deleted';
    }
}
