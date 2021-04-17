<?php

namespace App\Http\Controllers\Api;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    static public function getAll()
    {
        return Category::get();
    }

    static public function getCategoryById($category_id)
    {
        return Category::where('id', $category_id)->get()->first();;
    }
}
