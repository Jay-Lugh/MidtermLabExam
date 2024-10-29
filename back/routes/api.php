<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/books', [BookController::class, 'index']); //Read all
Route::post('/books', [BookController::class, 'store']); //Create
Route::get('/books/{id}', [BookController::class, 'show']); //Read one
Route::put('/books/{id}', [BookController::class, 'update']);//update
Route::delete('/books/{id}', [BookController::class, 'destroy']);//delete