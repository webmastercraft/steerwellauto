<?php

use Illuminate\Support\Facades\Route;

Route::get('/vehicles', 'FavouriteController@getFavouriteVehicles');
Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/', 'FavouriteController@getAll');
	Route::get('/{id}', 'FavouriteController@getFavouriteVehiclesById');
	Route::post('/', 'FavouriteController@AddFavourite');
});

