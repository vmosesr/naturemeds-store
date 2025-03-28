<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        return $this->authenticated($request, Auth::user());
    }

    /**
     * Determine where to redirect users after login based on their role.
     */
    protected function authenticated(Request $request, $user): RedirectResponse
    {
        return match ($user->primaryRole) {
            'admin' => redirect()->intended('/admin/dashboard'),
            'regional_admin' => redirect()->intended('/regional-admin/dashboard'),
            'medical_practitioner' => redirect()->intended('/medical/dashboard'),
            'content_moderator' => redirect()->intended('/moderator/dashboard'),
            'logistics_manager' => redirect()->intended('/logistics/dashboard'),
            'support_agent' => redirect()->intended('/support/dashboard'),
            default => redirect()->intended('/dashboard'), // Default for customers
        };
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
