<?php

namespace App\Http\Controllers\Api;

use App\TrackVehicle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TrackVehicleController extends Controller
{
    public function getAll(Request $request)
    {
        $data_array = TrackVehicle::get();
        return TrackVehicleController::decodeJsonDataFromArray($data_array);
    }

    public function getTrackById($transactions_id) {
    	$data = TrackVehicle::where('transactions_id', $transactions_id)
                ->leftJoin('steer_well_vehicles', 'steer_well_tracks_vehicles.vehicle_id', '=', 'steer_well_vehicles.id')
                ->leftJoin('steer_well_brands', 'steer_well_vehicles.brand_id', '=', 'steer_well_brands.id')
                ->leftJoin('steer_well_models', 'steer_well_vehicles.model_id', '=', 'steer_well_models.id')
                ->leftJoin('steer_well_categories', 'steer_well_vehicles.category_id', '=', 'steer_well_categories.id')
                ->leftJoin('steer_well_bookings', 'steer_well_tracks_vehicles.booking_id', '=', 'steer_well_bookings.id')
                ->select('steer_well_tracks_vehicles.id', 'steer_well_tracks_vehicles.user_id' , 'steer_well_tracks_vehicles.booking_id', 'steer_well_tracks_vehicles.vehicle_id', 'steer_well_tracks_vehicles.transactions_id', 'steer_well_tracks_vehicles.geo_locations', 'steer_well_tracks_vehicles.current_location' , 'steer_well_tracks_vehicles.step_info', 'steer_well_tracks_vehicles.current_step', 'steer_well_vehicles.image_paths', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.category_id', 'steer_well_brands.title as brand_title', 'steer_well_models.title as model_title', 'steer_well_categories.title as category_title', 'steer_well_bookings.country', 'steer_well_bookings.port', 'steer_well_bookings.address')
                ->get()
                ->first();
        return TrackVehicleController::decodeJsonData($data);
    }

    public function decodeJsonData($data) {
        $data["step_info"] = json_decode($data["step_info"]);
        $data["image_paths"] = json_decode($data["image_paths"]);
        return $data;
    }

    public function decodeJsonDataFromArray($array_data) {
        foreach($array_data AS $data) {
            $data = TrackVehicleController::decodeJsonData($data);
        }
        return $array_data;
    }
}
