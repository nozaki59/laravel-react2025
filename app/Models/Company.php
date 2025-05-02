<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name',
        'email',
        'website',
        'phone',
        'address',
        'description',
        'logo',
    ];
}
