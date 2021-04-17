<?php

use Illuminate\Support\Facades\Route;

Route::get('/recent', 'VehicleController@getRecentVehicles');
Route::post('/search', 'VehicleController@searchVehicleByIds');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/', 'VehicleController@getAllVehicles');
    Route::get('/info', 'VehicleController@getSearchInfo');
    Route::get('/similar/{id}', 'VehicleController@getSimilarVehicles');
    Route::get('/{id}', 'VehicleController@getVehicleById');
});
