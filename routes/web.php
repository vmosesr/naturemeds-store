<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PagesController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/products', [PagesController::class, 'index'])->name('products');
Route::get('/clinics', [PagesController::class, 'index'])->name('clinics');
Route::get('/checkouts', [PagesController::class, 'index'])->name('checkouts');
Route::get('/articles', [PagesController::class, 'index'])->name('articles');
Route::get('/support', [PagesController::class, 'index'])->name('support');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
