<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    // app/Http/Controllers/Admin/UserController.php
    public function updateRoles(Request $request, User $user)
    {
        $validated = $request->validate([
            'roles' => 'array',
            'roles.*' => 'exists:roles,id',
        ]);

        $user->roles()->sync($validated['roles']);

        return back()->with('success', 'User roles updated');
    }
}
