<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Redirect;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Redirect::macro('toDashboard', function () {
            $user = \Illuminate\Support\Facades\Auth::user();
            
            return match($user->primaryRole) {
                'admin' => redirect()->route('admin.dashboard'),
                'regional_admin' => redirect()->route('regional-admin.dashboard'),
                'medical_practitioner' => redirect()->route('medical-practitioner.dashboard'),
                'content_moderator' => redirect()->route('content-moderator.dashboard'),
                'logistics_manager' => redirect()->route('logistics-manager.dashboard'),
                'support_agent' => redirect()->route('support-agent.dashboard'),
                default => redirect()->route('customer.dashboard'),
            };
        });
    }
}
