import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <div className="p-4">
            <Head title="Dashboard" />
            <h1 className="text-2xl font-bold">ダッシュボード</h1>
            <p>ここがInertia + Reactで作ったページです。</p>
        </div>
    );
}
