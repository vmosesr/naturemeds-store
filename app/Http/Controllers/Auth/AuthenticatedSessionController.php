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
            'admin' => redirect()->route('admin.dashboard'),
            'regional_admin' => redirect()->route('regional-admin.dashboard'),
            'medical_practitioner' => redirect()->route('medical-practitioner.dashboard'),
            'content_moderator' => redirect()->route('content-moderator.dashboard'),
            'logistics_manager' => redirect()->route('logistics-manager.dashboard'),
            'support_agent' => redirect()->route('support-agent.dashboard'),
            default => redirect()->route('customer.dashboard'),
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
