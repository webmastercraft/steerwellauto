<?php

namespace App\Http\Controllers\Api;

use App\TrackDoc;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TrackDocController extends Controller
{
    public function getAll(Request $request)
    {
        $data_array = TrackDoc::get();
        return TrackDocController::decodeJsonDataFromArray($data_array);
    }

    public function getTrackById($transactions_id) {
    	$data = TrackDoc::where('transactions_id', $transactions_id)
                ->leftJoin('steer_well_vehicles', 'steer_well_tracks_doc.vehicle_id', '=', 'steer_well_vehicles.id')
                ->leftJoin('steer_well_brands', 'steer_well_vehicles.brand_id', '=', 'steer_well_brands.id')
                ->leftJoin('steer_well_models', 'steer_well_vehicles.model_id', '=', 'steer_well_models.id')
                ->leftJoin('steer_well_categories', 'steer_well_vehicles.category_id', '=', 'steer_well_categories.id')
                ->leftJoin('steer_well_bookings', 'steer_well_tracks_doc.booking_id', '=', 'steer_well_bookings.id')
                ->select('steer_well_tracks_doc.id', 'steer_well_tracks_doc.user_id' , 'steer_well_tracks_doc.booking_id', 'steer_well_tracks_doc.vehicle_id', 'steer_well_tracks_doc.transactions_id', 'steer_well_tracks_doc.geo_locations', 'steer_well_tracks_doc.current_location' , 'steer_well_tracks_doc.is_owner_doc_delivered', 'steer_well_tracks_doc.is_transportation_delivered', 'steer_well_tracks_doc.is_bill_landing', 'steer_well_tracks_doc.owner_doc_at', 'steer_well_tracks_doc.transportation_at', 'steer_well_tracks_doc.bill_landing_at', 'steer_well_vehicles.image_paths', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.category_id', 'steer_well_brands.title as brand_title', 'steer_well_models.title as model_title', 'steer_well_categories.title as category_title', 'steer_well_bookings.country', 'steer_well_bookings.port', 'steer_well_bookings.address')
                ->get()
                ->first();
        return TrackDocController::decodeJsonData($data);
    }

    public function decodeJsonData($data) {
        $data["image_paths"] = json_decode($data["image_paths"]);
        return $data;
    }

    public function decodeJsonDataFromArray($array_data) {
        foreach($array_data AS $data) {
            $data = TrackDocController::decodeJsonData($data);
        }
        return $array_data;
    }
}
