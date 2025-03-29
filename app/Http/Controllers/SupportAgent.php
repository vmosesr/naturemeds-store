<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SupportAgent extends Controller
{
    public function dashboard()
    {
        return Inertia::render('naturemeds/users/support-agent/dashboard');

    }
}
