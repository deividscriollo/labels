<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//-------------------------------- Pacientes--------------------------------
Route::get('/Add_Paciente/{datos}', function ($datos) {
    // return view('welcome');
    // return "en proceso generacion";
    $arrayName = array('hola' => $datos);

    // return response()->json($arrayName);
    return $arrayName;
});
