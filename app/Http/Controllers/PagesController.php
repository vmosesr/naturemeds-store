<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }
    public function products()
    {
        return Inertia::render('Products');
    }

    public function clinics()
    {
        return Inertia::render('Clinics');
    }

    public function checkouts()
    {
        return Inertia::render('Checkouts');
    }

    public function articles()
    {
        return Inertia::render('Articles');
    }

    public function support()
    {
        return Inertia::render('Support');
    }
}
