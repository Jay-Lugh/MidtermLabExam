<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Create table for users
        Schema::create('books', function (Blueprint $table) {
        $table->id(); // Auto-incrementing ID
        $table->string('title');
        $table->string('author');
        $table->integer('published_year');
        $table->string('genre');
        $table->text('description')->nullable();
        $table->timestamps(); // Created_at and Updated_at fields
    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
