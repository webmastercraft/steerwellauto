<?php

use Illuminate\Support\Facades\Route;

Route::post('/userAvatar', 'UploadController@uploadAvatarImage');
Route::post('/userFiles', 'UploadController@uploadUserFiles');

// Route::group(['middleware' => 'auth:api'], function() {
//     Route::post('/userAvatar', 'UploadController@uploadAvatarImage');
// 	Route::post('/userFiles', 'UploadController@uploadUserFiles');
// });

