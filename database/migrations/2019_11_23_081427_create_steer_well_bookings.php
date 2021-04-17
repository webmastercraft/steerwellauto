<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSteerWellBookings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steer_well_bookings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('vehicle_id');
            $table->unsignedInteger('vehicle_price');
            $table->unsignedInteger('booking_price');
            $table->unsignedInteger('delivery_price');
            $table->unsignedInteger('total_price');
            $table->string('country');
            $table->string('port');
            $table->string('address');
            $table->string('doc_path')->nullable();
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
        Schema::dropIfExists('steer_well_bookings');
    }
}
