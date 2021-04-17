<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'ArticleController@getAll');
Route::get('/similar/{id}', 'ArticleController@getSimilarArticles');
Route::get('/browse', 'ArticleController@browseArticles');
Route::get('/hot', 'ArticleController@getHotArticle');
Route::get('/recent', 'ArticleController@getLastArticles');
Route::get('/{id}', 'ArticleController@getArticleById');

