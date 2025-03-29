<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentModerator extends Controller
{
    public function dashboard()
    {
        return Inertia::render('naturemeds/users/content-moderator/dashboard');

    }
}
