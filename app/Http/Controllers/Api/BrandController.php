<?php

namespace App\Http\Controllers\Api;

use App\Brand;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ModelTypeController;
use Illuminate\Support\Facades\DB;

class BrandController extends Controller
{
    static public function getAllOrderByPopular()
    {
        return Brand::orderByDesc('popular')
	        ->get();
    }

    static public function getAllWithModels()
    {
        $brands = Brand::get();
	    $models = ModelTypeController::getAll();
        foreach ($brands as $brand) {
            $brand_id = $brand->id;
            $filteredModelItems = $models->filter(function($q) use($brand_id){
                return $q->brand_id == $brand_id;
            });
            $arrayData = array();
            foreach ($filteredModelItems as $filteredModelItem) {
               array_push($arrayData, $filteredModelItem);
            }
            $brand->models = $arrayData;
        }

        return $brands;
    }
}
