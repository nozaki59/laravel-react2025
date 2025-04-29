<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// TOPページ
Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});
