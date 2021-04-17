<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'FaqController@getAll');
Route::get('/category', 'FaqController@getAllCategories');
Route::get('/category/{id}', 'FaqController@getFaqsById');

