<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicController extends Controller
{
    public function index()
    {
        return Inertia::render('naturemeds/pages/clinics/index');
    }
}
