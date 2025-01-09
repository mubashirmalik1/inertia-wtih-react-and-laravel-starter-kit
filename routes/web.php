<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    sleep(1);
    return inertia('Home',['name' => 'John Doe']);
});
