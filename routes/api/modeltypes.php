<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'ModelTypeController@getAll');
Route::get('/{id}', 'ModelTypeController@getModelByBrandId');
