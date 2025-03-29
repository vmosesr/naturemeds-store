<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicalPractitioner extends Controller
{
    public function dashboard()
    {
        return Inertia::render('naturemeds/users/medical-practitioner/dashboard');

    }
}
