<?php

use Illuminate\Support\Facades\Route;

Route::get('/home', 'PageController@getHomePageData');
Route::get('/faq', 'PageController@getFaqPageData');
Route::get('/articles', 'PageController@getArticleData');
Route::get('/articles/{id}', 'PageController@getArticleDataById');
Route::get('/browser', 'PageController@getBrowserPageData');
Route::get('/browser/{id}', 'PageController@getBrowserPageDataByCategory');
Route::get('/detail/{id}', 'PageController@getVehicleDetailData');

Route::group(['middleware' => 'auth:api'], function() {
	Route::get('/profile/current', 'PageController@getCurrentProfileData');
	Route::get('/profile/{id}', 'PageController@getProfileData');
});

