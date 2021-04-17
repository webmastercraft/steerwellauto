<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/', 'TransactionsController@getAll');
	Route::get('/{id}', 'TransactionsController@getTransactionsByIds');
	Route::post('/', 'TransactionHistoryController@insert');
});
