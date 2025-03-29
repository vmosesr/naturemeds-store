<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegionalAdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('naturemeds/users/regional-admin/dashboard');

    }
}
