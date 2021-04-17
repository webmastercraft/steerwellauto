<?php

namespace App\Http\Controllers\Api;

use App\ModelType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ModelTypeController extends Controller
{
    static public function getAll()
    {
        return ModelType::get();
    }

    public function getModelByBrandId($brand_id) {
    	return ModelType::where('brand_id', $brand_id)->get();
    }
}