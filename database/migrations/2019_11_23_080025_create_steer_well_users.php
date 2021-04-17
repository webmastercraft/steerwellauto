<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSteerWellUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steer_well_users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('email')->unique();
            $table->string('password')->default("");;
            $table->string('passport')->nullable();
            $table->text('addition_upload_paths')->nullable();
            $table->string('phone')->nullable();
            $table->string('country')->nullable();
            $table->string('port')->nullable();
            $table->string('address')->nullable();
            $table->text('avatar_path')->nullable();
            $table->string('language')->nullable();
            $table->string('currency')->nullable();
            $table->unsignedInteger('login_type')->nullable()->default(0);
            $table->unsignedInteger('user_type')->nullable()->default(0);
            $table->boolean('is_admin')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('steer_well_users');
    }
}
