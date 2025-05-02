<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * 企業登録処理
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'nullable|email|max:255',
            'website'     => 'nullable|url|max:255',
            'phone'       => 'nullable|string|max:50',
            'address'     => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'logo'        => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        try {
            DB::transaction(function () use (&$data, $request) {
                // 画像保存（storage/app/public/companies に置く）
                if ($request->hasFile('logo')) {
                    $path        = $request->file('logo')->store('companies', 'public');
                    $data['logo'] = 'storage/' . $path;
                }

                Company::create($data);
            }, 5);
        } catch (\Throwable $e) {
            \Log::error('Company store failed: '.$e->getMessage());
            return redirect()
                ->route('companies.create')
                ->with('error', '企業情報の登録に失敗しました。');
        }

        return redirect()
            ->route('companies.create')
            ->with('success', '企業情報を登録しました。');
    }
}
