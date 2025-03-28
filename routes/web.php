<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClinicController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RegionalAdminController;
use App\Http\Controllers\MedicalPractitioner;
use App\Http\Controllers\LogisticManager;
use App\Http\Controllers\SupportAgent;
use App\Http\Controllers\ContentModerator;
use App\Http\Controllers\Customer;



Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    // Other admin routes
});

Route::middleware(['auth', 'role:regional_admin'])->prefix('regional-admin')->group(function () {
    Route::get('/dashboard', [RegionalAdminController::class, 'dashboard'])->name('regional.dashboard');
});

Route::middleware(['auth', 'role:medical_practitioner'])->prefix('medical-practitioner')->group(function () {
    Route::get('/dashboard', [MedicalPractitioner::class, 'dashboard'])->name('regional.dashboard');
});

Route::middleware(['auth', 'role:logistics_manager'])->prefix('logistics-manager')->group(function () {
    Route::get('/dashboard', [LogisticManager::class, 'dashboard'])->name('regional.dashboard');
});

Route::middleware(['auth', 'role:support_agent'])->prefix('support-agent')->group(function () {
    Route::get('/dashboard', [SupportAgent::class, 'dashboard'])->name('regional.dashboard');
});

Route::middleware(['auth', 'role:content_moderator'])->prefix('content-moderator')->group(function () {
    Route::get('/dashboard', [ContentModerator::class, 'dashboard'])->name('regional.dashboard');
});

Route::middleware(['auth', 'role:customer'])->prefix('customer')->group(function () {
    Route::get('/dashboard', [Customer::class, 'dashboard'])->name('regional.dashboard');
});



Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/clinics', [ClinicController::class, 'index'])->name('clinics');
Route::get('/checkouts', [CheckoutController::class, 'index'])->name('checkouts');
Route::get('/articles', [ArticleController::class, 'index'])->name('articles');
Route::get('/support', [SupportController::class, 'index'])->name('support');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
