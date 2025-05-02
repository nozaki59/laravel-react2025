import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { route } from 'ziggy-js';

export default function CreateCompany() {
    const { flash = {} } = usePage().props as any;
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        website: '',
        phone: '',
        address: '',
        description: '',
        logo: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('companies.store'), {
            preserveScroll: true,
        });
    };

    return (
        <Layout>
            <Head title="企業情報登録" />
            {flash.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
                    {flash.success}
                </div>
            )}

            <div className="w-1/2 mx-auto p-6 bg-white shadow rounded">
                <h1 className="text-2xl font-bold mb-4">企業情報登録フォーム</h1>
                <form onSubmit={submit} className="space-y-4">
                    {/* Company Name */}
                    <div>
                        <label className="block text-gray-700">企業名</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded"
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700">メールアドレス</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block text-gray-700">ウェブサイト</label>
                        <input
                            type="text"
                            value={data.website}
                            onChange={(e) => setData('website', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded"
                        />
                        {errors.website && <p className="text-red-600 text-sm mt-1">{errors.website}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700">電話番号</label>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded"
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-700">住所</label>
                        <input
                            type="text"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded"
                        />
                        {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700">企業概要</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded h-24"
                        />
                        {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
                    </div>

                    {/* Logo Upload */}
                    <div>
                        <label className="block text-gray-700">ロゴ画像</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e =>
                                setData('logo', e.target.files ? e.target.files[0] : null)
                            }
                            className="mt-1 block w-full text-sm text-gray-700"
                        />
                        {errors.logo && (
                            <p className="text-red-600 text-sm mt-1">{errors.logo}</p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            登録する
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
