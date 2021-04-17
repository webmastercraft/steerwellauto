<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSteerWellTransactions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steer_well_transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('booking_id');
            $table->unsignedInteger('vehicle_id');
            $table->unsignedInteger('status');
            $table->unsignedInteger('delivery_status');
            $table->unsignedInteger('residual_cost');
            $table->unsignedInteger('booking_cost');
            $table->unsignedInteger('remain_to_pay');
            $table->timestamp('reserved_untill')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamp('residual_paid_at')->nullable();
            $table->timestamp('booking_paid_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->boolean('residual_paid')->default(0);
            $table->boolean('booking_paid')->default(0);
            $table->text('doc_path');
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
        Schema::dropIfExists('steer_well_transactions');
    }
}
