<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSteerWellTracksDoc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steer_well_tracks_doc', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('vehicle_id');
            $table->unsignedInteger('booking_id');
            $table->unsignedInteger('transactions_id');
            $table->text('geo_locations');
            $table->string('current_location');
            $table->boolean('is_owner_doc_delivered')->default(0);
            $table->boolean('is_transportation_delivered')->default(0);
            $table->boolean('is_bill_landing')->default(0);
            $table->timestamp('owner_doc_at')->nullable();
            $table->timestamp('transportation_at')->nullable();
            $table->timestamp('bill_landing_at')->nullable();
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
        Schema::dropIfExists('steer_well_tracks_doc');
    }
}
