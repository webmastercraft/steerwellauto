<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'steer_well_users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'passport',
        'addition_upload_paths',
        'phone',
        'country',
        'port',
        'address',
        'language',
        'currency',
        'login_type',
        'user_type',
        'remember_token',
    ];

    protected $casts = [
        'is_admin' => 'boolean',
    ];

    protected $hidden = [
        'remember_token',
        'password',
    ];
}
