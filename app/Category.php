<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'steer_well_categories';

    protected $fillable = ['title', 'description', 'image_path', 'background_image_path'];
}
