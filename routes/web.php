<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClinicController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\SupportController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/clinics', [ClinicController::class, 'index'])->name('clinics');
Route::get('/checkouts', [CheckoutController::class, 'index'])->name('checkouts');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles');
Route::get('/support', [SupportController::class, 'index'])->name('support');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
