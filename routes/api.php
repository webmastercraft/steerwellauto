<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// default name space for all routes is 'App\Http\Controllers\Api'
$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function() {
    // register auth routes
    Route::prefix('auth')
        ->group(base_path('routes/api/auth.php'));
    // register users routes
    Route::prefix('users')
        ->group(base_path('routes/api/users.php'));
    // register articles routes
    Route::prefix('articles')
        ->group(base_path('routes/api/articles.php'));
    // register brands routes
    Route::prefix('brands')
        ->group(base_path('routes/api/brands.php'));
    // register categories routes
    Route::prefix('categories')
        ->group(base_path('routes/api/categories.php'));
    // register categories routes
    Route::prefix('models')
        ->group(base_path('routes/api/modeltypes.php'));
    // register vehicles routes
    Route::prefix('vehicles')
        ->group(base_path('routes/api/vehicles.php'));
    // register vehicles routes
    Route::prefix('bookings')
        ->group(base_path('routes/api/bookings.php'));
    // register reviews routes
    Route::prefix('reviews')
        ->group(base_path('routes/api/reviews.php'));
    // register favourites routes
    Route::prefix('favourites')
        ->group(base_path('routes/api/favourites.php'));
    // register transactions routes
    Route::prefix('transactions')
        ->group(base_path('routes/api/transactions.php'));
    // register faq routes
    Route::prefix('faq')
        ->group(base_path('routes/api/faq.php'));
    // register faq routes
    Route::prefix('trackvehicles')
        ->group(base_path('routes/api/trackvehicles.php'));
    // register faq routes
    Route::prefix('trackdocs')
        ->group(base_path('routes/api/trackdocs.php'));
    // register page info routes
    Route::prefix('pages')
        ->group(base_path('routes/api/pages.php'));
    // register page info routes
    Route::prefix('uploads')
        ->group(base_path('routes/api/uploads.php'));
});
