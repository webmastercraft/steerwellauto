<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/update', 'UserController@update');
	Route::post('/insert', 'UserController@insert');
	Route::get('/', 'UserController@getAllUsers');
	Route::get('/{id}', 'UserController@getUsersById');
});

