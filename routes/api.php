<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RelatedPostController;
use App\Http\Controllers\DashboardPostController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

////////////////////////CATEGORY/////////////////////
Route::middleware('auth:sanctum')->post('category/create', [CategoryController::class, 'store']);
Route::middleware('auth:sanctum')->get('category/{category}', [CategoryController::class, 'show']);
Route::middleware('auth:sanctum')->put('category/{category}', [CategoryController::class, 'update']);
Route::middleware('auth:sanctum')->delete('category/{category}', [CategoryController::class, 'destroy']);
Route::get('categories', [CategoryController::class, 'index']);
////////////////////////POST//////////////////////////
Route::middleware('auth:sanctum')->post('posts', [PostController::class, 'store']);
Route::middleware('auth:sanctum')->put('post/{post:slug}', [PostController::class, 'update']);
Route::middleware('auth:sanctum')->delete('post/{post:slug}', [PostController::class, 'destroy']);

Route::get('home-posts', [HomeController::class, 'index']);
Route::get('posts/{post:slug}', [PostController::class, 'show']);
Route::get('posts', [PostController::class, 'index']);
Route::get('related-posts/{post:slug}', [RelatedPostController::class, 'index']);
Route::get('dashboard-posts', [DashboardPostController::class, 'index']);

//////////////////////////////////AUTH//////////////////////////////////////
Route::post('register', [RegisteredUserController::class, 'store']);
Route::post('login', [AuthenticatedSessionController::class, 'store']);
Route::middleware('auth:sanctum')->post('logout', [AuthenticatedSessionController::class, 'destroy']);

