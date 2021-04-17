<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\DB;

// Controllers
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\FavouriteController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ModelTypeController;
use App\Http\Controllers\Api\TransactionsController;
use App\Http\Controllers\Api\VehicleController;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{

    public function getHomePageData()
    {
    	$data = array();
    	$data['categories'] = CategoryController::getAll();
    	$data['brands'] = BrandController::getAllOrderByPopular();
        $data['models'] = ModelTypeController::getAll();
    	$data['recent_vehicles'] = VehicleController::getRecentVehicles();
    	$data['top_offers'] = FavouriteController::getFavouriteVehicles();
    	$data['news'] = ArticleController::getLastArticles(4);
        $data['reviews'] = ReviewController::getAll();
        return $data;
    }

    public function getFaqPageData()
    {
        return FaqController::getAll();
    }

    public function getBrowserPageData()
    {
        $search_info = VehicleController::getSearchInfo();
        $data = array();
        $data['categories'] = CategoryController::getAll();
        $data['models'] = ModelTypeController::getAll();
        $data['brands'] = BrandController::getAllWithModels();
        $data['mileage'] = array('min' => $search_info->min_mileage, 'max' => $search_info->max_mileage);
        $data['year'] = array('min' => $search_info->min_year, 'max' => $search_info->max_year);
        $data['price'] = array('min' => $search_info->min_price, 'max' => $search_info->max_price);
        return $data;
    }

    public function getBrowserPageDataByCategory($category_id)
    {
        $data = array();
        $search_info = VehicleController::getSearchInfoByCategoryId($category_id);
        $data['category_data'] = CategoryController::getCategoryById($category_id);
        $data['models'] = ModelTypeController::getAll();
        $data['brands'] = BrandController::getAllWithModels();
        $data['mileage'] = array('min' => $search_info->min_mileage, 'max' => $search_info->max_mileage);
        $data['year'] = array('min' => $search_info->min_year, 'max' => $search_info->max_year);
        $data['price'] = array('min' => $search_info->min_price, 'max' => $search_info->max_price);
        return $data;
    }

    public function getVehicleDetailData($vehicle_id) {
        $data = array();
        $data['vehicle_data'] = VehicleController::getVehicleById($vehicle_id);
        $data['brands'] = BrandController::getAllWithModels();
        $data['similar'] = VehicleController::getSimilarVehicles($data['vehicle_data']->id ,$data['vehicle_data']->brand_id);
        $data['faq'] = FaqController::getAll();
        return $data;
    }

    public function getProfileData($user_id) {
        $data = array();
        $data['personal_data'] = UserController::getUsersById($user_id);
        $data['message_data'] = array();
        $data['transaction_data'] = TransactionsController::getTransactionsByIds($user_id);
        $data['favourite_data'] = FavouriteController::getFavouriteVehiclesById($user_id);
        return $data;
    }

    public function getCurrentProfileData(Request $request) {
        $user = $request->user();
        if ($user && $user->id) {
            $user_id = $user->id;
            $data = array();
            $data['personal_data'] = UserController::getUsersById($user_id);
            $data['message_data'] = array();
            $data['transaction_data'] = TransactionsController::getTransactionsByIds($user_id);
            $data['favourite_data'] = FavouriteController::getFavouriteVehiclesById($user_id);
            return $data;
        } else {
            $error_array = array('user' => ["The user credentials were incorrect."]);
            return $this->handleErrorResponse($error_array);
        }
    }

    public function getArticleData() {
        $data = array();
        $data['top_hot_data'] = ArticleController::getHotArticle();
        $data['category_data'] = ArticleController::browseArticles();
        $data['recent_data'] = ArticleController::getLastArticles(5);
        $data['hot_data'] = ArticleController::getLastArticles(5);
        $data['popular_data'] = ArticleController::getLastArticles(5);
        $data['most_data'] = ArticleController::getLastArticles(5);
        return $data;
    }

    public function getArticleDataById($article_id) {
        $data = array();
        $data['article_data'] = ArticleController::getArticleById($article_id);
        $categories_id = $data['article_data']->categories_id;
        $data['recent_data'] = ArticleController::getSimilarArticles($article_id, $categories_id);
        return $data;
    }

    public function handleErrorResponse($messages) {
        $error_response = array();
        $error_response["success"] = false;
        $error_response["messages"] = $messages;
        return response()->json($error_response, 422);
    }
}

