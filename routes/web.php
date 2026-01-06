<?php

use App\Http\Controllers\SubscribeController;
use App\Http\Middleware\CheckDeviceLimit;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

// SECTION: AUTHENTICATION
// ... sisanya dibuatin ama fortify
Route::post('/logout', function (Request $request) {
    return app(\Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::class)->destroy($request);
})->name('logout')->middleware(['auth', 'logout_device']);

// SECTION: CUSTOMER AFTER LOGIN
Route::middleware(['auth', 'check_device_limit'])->group(function () {
    // * ANCHOR: SUBSCRIPTION
    Route::prefix('subscription')->name('subscription.')->group(function () {
        Route::get('/', [SubscribeController::class, 'showPlans'])->name('plans');
        Route::post('/', [SubscribeController::class, 'processCheckout'])->name('process');
        Route::get('/success', [SubscribeController::class, 'successSubscription'])->name('success');
        Route::get('/{plan}', [SubscribeController::class, 'checkoutSubscription'])->name('checkout');
    });

    // * ANCHOR: HOME
    Route::get('/home', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('home');
});
