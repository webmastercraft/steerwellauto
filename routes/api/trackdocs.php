<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/', 'TrackDocController@getAll');
	Route::get('/{id}', 'TrackDocController@getTrackById');
});
