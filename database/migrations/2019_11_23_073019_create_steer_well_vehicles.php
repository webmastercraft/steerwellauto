<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSteerWellVehicles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steer_well_vehicles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('brand_id');
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('model_id');
            $table->text('description');
            $table->text('image_paths');
            $table->text('interior_image_paths');
            $table->unsignedInteger('mileage');
            $table->unsignedInteger('year');
            $table->unsignedInteger('price');
            $table->string('gear_box');
            $table->string('cylinders');
            $table->string('fuel_type');
            $table->unsignedInteger('mpg_city');
            $table->unsignedInteger('mpg_hwy');
            $table->unsignedInteger('seats');
            $table->unsignedInteger('owner_id');
            $table->unsignedInteger('accidents')->default(0);
            $table->text('features');
            $table->text('specs');
            $table->text('mechanicals');
            $table->boolean('isNew')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('steer_well_vehicles');
    }
}
