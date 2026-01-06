<?php

use App\Http\Controllers\SubscribeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::middleware('auth')->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('welcome');

    Route::prefix('subscription')->name('subscription.')->group(function () {
        Route::get('/', [SubscribeController::class, 'showPlans'])->name('plans');
        Route::get('/{plan}', [SubscribeController::class, 'checkoutSubscription'])->name('checkout');
        Route::post('/', [SubscribeController::class, 'processCheckout'])->name('process');
        Route::get('/success', [SubscribeController::class, 'successSubscription'])->name('success');
    });
});
