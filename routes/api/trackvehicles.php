<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/', 'TrackVehicleController@getAll');
	Route::get('/{id}', 'TrackVehicleController@getTrackById');
});