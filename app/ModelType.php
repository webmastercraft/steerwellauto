<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ModelType extends Model
{
    protected $table = 'steer_well_models';

    protected $fillable = ['title', 'brand_id','description', 'image_path'];
}
