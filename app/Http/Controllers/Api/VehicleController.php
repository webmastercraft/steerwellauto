<?php

namespace App\Http\Controllers\Api;

use App\Vehicle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class VehicleController extends Controller
{
   	public function getAllVehicles()
    {
        $data_array = VehicleController::getAll()
            ->get();
        return VehicleController::decodeJsonDataFromArray($data_array);
    }

    static public function getRecentVehicles()
    {
        $limit = 16;
        $data_array = VehicleController::getAll()
            ->limit($limit)
            ->orderBy('year', 'desc')
            ->orderBy('mileage', 'asc')
            ->get();
        return VehicleController::decodeJsonDataFromArray($data_array);
    }

    static public function getVehicleById($vehicle_id)
    {
        $data = VehicleController::getAll()
            ->where('steer_well_vehicles.id', $vehicle_id)
            ->get()->first();
        return VehicleController::decodeJsonData($data);
    }

    public function searchVehicleByIds(Request $request)
    {
        $data = $this->validate($request, [
            'brand_id' => 'numeric|nullable|exists:steer_well_brands,id',
            'model_id' => 'numeric|nullable|exists:steer_well_models,id',
            'category_id' => 'numeric|nullable|exists:steer_well_categories,id',
            'sort_by' => 'nullable|numeric',
            'order_by' => 'nullable|numeric',
            'min_mileage' => 'nullable|numeric',
            'max_mileage' => 'nullable|numeric',
            'min_year' => 'nullable|numeric',
            'max_year' => 'nullable|numeric',
            'min_price' => 'nullable|numeric',
            'max_price' => 'nullable|numeric',
        ]);

        $query = VehicleController::getAll();

        if (array_key_exists('order_by', $data) && array_key_exists('sort_by', $data))
        {
            if ($data["order_by"] == 0) //price
            {
                if ($data["sort_by"] == 0)
                {
                    $query = $query->orderBy('steer_well_vehicles.price');
                } else {
                    $query = $query->orderByDesc('steer_well_vehicles.price');
                }

            } else if ($data["order_by"] == 1) //mileage
            {
                if ($data["sort_by"] == 0)
                {
                    $query = $query->orderBy('steer_well_vehicles.mileage');
                } else {
                    $query = $query->orderByDesc('steer_well_vehicles.mileage');
                }
            }
            else //year
            {
                if ($data["sort_by"] == 0)
                {
                    $query = $query->orderBy('steer_well_vehicles.year');
                } else {
                    $query = $query->orderByDesc('steer_well_vehicles.year');
                }
            }
        } else {
            $query = $query->orderByDesc('steer_well_vehicles.year');
        }

        if (array_key_exists('brand_id', $data))
        {
            $query = $query->where('steer_well_vehicles.brand_id', $data["brand_id"]);
        }
        if (array_key_exists('model_id', $data))
        {
            $query = $query->where('steer_well_vehicles.model_id', $data["model_id"]);
        }
        if (array_key_exists('category_id', $data))
        {
            $query = $query->where('steer_well_vehicles.category_id', $data["category_id"]);
        }
        if (array_key_exists('min_mileage', $data) && array_key_exists('max_mileage', $data) && $data["max_mileage"] >=  $data["min_mileage"])
        {
            $query = $query->where('steer_well_vehicles.mileage',">=", $data["min_mileage"])
                            ->where('steer_well_vehicles.mileage',"<=", $data["max_mileage"]);
        }
        if (array_key_exists('min_year', $data) && array_key_exists('max_year', $data) && $data["max_year"] >=  $data["min_year"])
        {
            $query = $query->where('steer_well_vehicles.year',">=", $data["min_year"])
                            ->where('steer_well_vehicles.year',"<=", $data["max_year"]);
        }
        if (array_key_exists('min_price', $data) && array_key_exists('max_price', $data) && $data["max_price"] >=  $data["min_price"])
        {
            $query = $query->where('steer_well_vehicles.price',">=", $data["min_price"])
                            ->where('steer_well_vehicles.price',"<=", $data["max_price"]);
        }

        return VehicleController::decodeJsonDataFromArray($query->get());
    }

    static public function getSimilarVehicles($vehicle_id, $brand_id)
    {
        $limit = 3;
        $data_array = VehicleController::getAll()
                ->where('steer_well_vehicles.id', "!=", $vehicle_id)
                ->where('steer_well_vehicles.brand_id', $brand_id)
                ->limit($limit)
                ->get();
        return VehicleController::decodeJsonDataFromArray($data_array);
    }

    static public function getSearchInfo() {
        $data = DB::table('steer_well_vehicles')
        ->select(DB::raw('MAX(steer_well_vehicles.mileage) as max_mileage'), DB::raw('MIN(steer_well_vehicles.mileage) as min_mileage'), DB::raw('MAX(steer_well_vehicles.year) as max_year'), DB::raw('MIN(steer_well_vehicles.year) as min_year'), DB::raw('MAX(steer_well_vehicles.price) as max_price'), DB::raw('MIN(steer_well_vehicles.price) as min_price'))
        ->get()->first();
        return $data;
    }

    static public function getSearchInfoByCategoryId($category_id) {
        return DB::table('steer_well_vehicles')
        ->where('category_id', '=', $category_id)
        ->select(DB::raw('MAX(steer_well_vehicles.mileage) as max_mileage'), DB::raw('MIN(steer_well_vehicles.mileage) as min_mileage'), DB::raw('MAX(steer_well_vehicles.year) as max_year'), DB::raw('MIN(steer_well_vehicles.year) as min_year'), DB::raw('MAX(steer_well_vehicles.price) as max_price'), DB::raw('MIN(steer_well_vehicles.price) as min_price'))
        ->get()->first();
    }

    static public function decodeJsonData($data) {
        $data["features"] = json_decode($data["features"]);
        $data["image_paths"] = json_decode($data["image_paths"]);
        $data["interior_image_paths"] = json_decode($data["interior_image_paths"]);
        $data["mechanicals"] = json_decode($data["mechanicals"]);
        $data["specs"] = json_decode($data["specs"]);
        return $data;
    }

    static public function decodeJsonDataFromArray($array_data) {
        foreach($array_data AS $data) {
            $data = VehicleController::decodeJsonData($data);
        }
        return $array_data;
    }

    static public function getAll()
    {
        return Vehicle::latest()
            ->leftJoin('steer_well_brands', 'steer_well_vehicles.brand_id', '=', 'steer_well_brands.id')
            ->leftJoin('steer_well_models', 'steer_well_vehicles.model_id', '=', 'steer_well_models.id')
            ->leftJoin('steer_well_categories', 'steer_well_vehicles.category_id', '=', 'steer_well_categories.id')
            ->select('steer_well_vehicles.id', 'steer_well_vehicles.accidents' , 'steer_well_vehicles.cylinders', 'steer_well_vehicles.description', 'steer_well_vehicles.features', 'steer_well_vehicles.fuel_type', 'steer_well_vehicles.gear_box' , 'steer_well_vehicles.image_paths', 'steer_well_vehicles.interior_image_paths', 'steer_well_vehicles.isNew', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.mechanicals', 'steer_well_vehicles.category_id', 'steer_well_vehicles.mileage', 'steer_well_vehicles.mpg_city', 'steer_well_vehicles.mpg_hwy', 'steer_well_vehicles.owner_id', 'steer_well_vehicles.price', 'steer_well_vehicles.seats', 'steer_well_vehicles.specs', 'steer_well_vehicles.updated_at', 'steer_well_vehicles.year', 'steer_well_brands.title as brand_title', 'steer_well_models.title as model_title', 'steer_well_categories.title as category_title', 'steer_well_vehicles.created_at');
    }
}
