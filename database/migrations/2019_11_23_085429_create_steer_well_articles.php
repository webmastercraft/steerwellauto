<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSteerWellArticles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steer_well_articles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('categories_id');
            $table->unsignedInteger('brand_id');
            $table->unsignedInteger('model_id');
            $table->string('title');
            $table->string('image_path');
            $table->text('description');
            $table->text('content');
            $table->boolean('published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamp('last_read_at')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('steer_well_articles');
    }
}
