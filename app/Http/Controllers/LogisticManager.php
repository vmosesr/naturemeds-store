<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LogisticManager extends Controller
{
    public function dashboard()
    {
        return Inertia::render('naturemeds/users/logistic-manager/dashboard');

    }
}
