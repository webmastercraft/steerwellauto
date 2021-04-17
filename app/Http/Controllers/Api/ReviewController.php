<?php

namespace App\Http\Controllers\Api;

use App\Review;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReviewController extends Controller
{
    static public function getAll()
    {
        return Review::leftJoin('steer_well_users', 'steer_well_users.id', '=', 'steer_well_reviews.user_id')
        		->select('steer_well_reviews.id', 'steer_well_reviews.user_id', 'steer_well_reviews.rating', 'steer_well_reviews.description', 'steer_well_users.avatar_path', 'steer_well_users.name')
        		->get();
    }
}
