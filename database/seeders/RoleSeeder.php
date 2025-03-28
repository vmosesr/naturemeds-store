<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'customer', 'description' => 'Default user role'],
            ['name' => 'admin', 'description' => 'Super administrator'],
            ['name' => 'regional_admin', 'description' => 'Regional administrator'],
            ['name' => 'medical_practitioner', 'description' => 'Medical professional'],
            ['name' => 'content_moderator', 'description' => 'Content manager'],
            ['name' => 'logistics_manager', 'description' => 'Logistics coordinator'],
            ['name' => 'support_agent', 'description' => 'Customer support'],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
