<?php

namespace App\Http\Controllers\Api;

use App\Favourite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\VehicleController;
use Illuminate\Support\Facades\DB;

class FavouriteController extends Controller
{
    public function getAll()
    {
        return Favourite::get();
    }

    static public function getFavouriteVehiclesById($user_id) {
        $data_array = DB::table('steer_well_favorites')
            ->where('steer_well_favorites.user_id', $user_id)
            ->select('steer_well_vehicles.id', 'steer_well_vehicles.accidents' , 'steer_well_vehicles.cylinders', 'steer_well_vehicles.description', 'steer_well_vehicles.features', 'steer_well_vehicles.fuel_type', 'steer_well_vehicles.gear_box' , 'steer_well_vehicles.image_paths', 'steer_well_vehicles.interior_image_paths', 'steer_well_vehicles.isNew', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.mechanicals', 'steer_well_vehicles.category_id', 'steer_well_vehicles.mileage', 'steer_well_vehicles.mpg_city', 'steer_well_vehicles.mpg_hwy', 'steer_well_vehicles.owner_id', 'steer_well_vehicles.price', 'steer_well_vehicles.seats', 'steer_well_vehicles.specs', 'steer_well_vehicles.updated_at', 'steer_well_vehicles.year', 'steer_well_brands.title as brand_title', 'steer_well_models.title as model_title', 'steer_well_categories.title as category_title')
            ->leftJoin('steer_well_vehicles', 'steer_well_favorites.vehicle_id', '=', 'steer_well_vehicles.id')
            ->leftJoin('steer_well_brands', 'steer_well_vehicles.brand_id', '=', 'steer_well_brands.id')
            ->leftJoin('steer_well_models', 'steer_well_vehicles.model_id', '=', 'steer_well_models.id')
            ->leftJoin('steer_well_categories', 'steer_well_vehicles.category_id', '=', 'steer_well_categories.id')
            ->get();
        foreach ($data_array as $data) {
                $data->features = json_decode($data->features);
                $data->image_paths = json_decode($data->image_paths);
                $data->interior_image_paths = json_decode($data->interior_image_paths);
                $data->mechanicals = json_decode($data->mechanicals);
                $data->specs = json_decode($data->specs);
            }
        return $data_array;
    }

    static public function getFavouriteVehicles()
    {
    	$data_array = DB::table('steer_well_favorites')
    		->select('steer_well_vehicles.id', 'steer_well_vehicles.accidents' , 'steer_well_vehicles.cylinders', 'steer_well_vehicles.description', 'steer_well_vehicles.features', 'steer_well_vehicles.fuel_type', 'steer_well_vehicles.gear_box' , 'steer_well_vehicles.image_paths', 'steer_well_vehicles.interior_image_paths', 'steer_well_vehicles.isNew', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.mechanicals', 'steer_well_vehicles.category_id', 'steer_well_vehicles.mileage', 'steer_well_vehicles.mpg_city', 'steer_well_vehicles.mpg_hwy', 'steer_well_vehicles.owner_id', 'steer_well_vehicles.price', 'steer_well_vehicles.seats', 'steer_well_vehicles.specs', 'steer_well_vehicles.updated_at', 'steer_well_vehicles.year', 'steer_well_brands.title as brand_title', 'steer_well_models.title as model_title', 'steer_well_categories.title as category_title', 'steer_well_vehicles.created_at', DB::raw('COUNT(steer_well_vehicles.id) as fav_count'))
    		->leftJoin('steer_well_vehicles', 'steer_well_favorites.vehicle_id', '=', 'steer_well_vehicles.id')
    		->leftJoin('steer_well_brands', 'steer_well_vehicles.brand_id', '=', 'steer_well_brands.id')
	    	->leftJoin('steer_well_models', 'steer_well_vehicles.model_id', '=', 'steer_well_models.id')
	    	->leftJoin('steer_well_categories', 'steer_well_vehicles.category_id', '=', 'steer_well_categories.id')
	    	->groupBy('steer_well.steer_well_vehicles.id', 'steer_well.steer_well_vehicles.accidents', 'steer_well.steer_well_vehicles.cylinders', 'steer_well.steer_well_vehicles.description', 'steer_well.steer_well_vehicles.features', 'steer_well.steer_well_vehicles.fuel_type', 'steer_well.steer_well_vehicles.gear_box', 'steer_well.steer_well_vehicles.image_paths', 'steer_well.steer_well_vehicles.interior_image_paths', 'steer_well.steer_well_vehicles.isNew', 'steer_well.steer_well_vehicles.image_paths', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.mechanicals', 'steer_well_vehicles.category_id', 'steer_well_vehicles.mileage', 'steer_well_vehicles.mpg_city', 'steer_well_vehicles.mpg_hwy', 'steer_well_vehicles.owner_id', 'steer_well_vehicles.price', 'steer_well_vehicles.seats', 'steer_well_vehicles.specs', 'steer_well_vehicles.updated_at', 'steer_well_vehicles.year', 'steer_well.steer_well_brands.title', 'steer_well.steer_well_models.title', 'steer_well.steer_well_categories.title', 'steer_well.steer_well_vehicles.created_at' )
	    	->orderByDesc('fav_count')
    		->get();
            foreach ($data_array as $data) {
                $data->features = json_decode($data->features);
                $data->image_paths = json_decode($data->image_paths);
                $data->interior_image_paths = json_decode($data->interior_image_paths);
                $data->mechanicals = json_decode($data->mechanicals);
                $data->specs = json_decode($data->specs);
            }
        return $data_array;
    }
}
