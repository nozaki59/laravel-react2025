import React, { ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Home, Users, QrCode, Heart, LogIn } from "lucide-react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { auth } = usePage().props as any;
    const siteName = import.meta.env.VITE_APP_NAME || 'MySite';

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="/img/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-xl font-semibold text-gray-800">{siteName}</span>
                </div>
                <div>
                    {auth.user ? (
                        <span className="text-gray-700">Hello, {auth.user.name}</span>
                    ) : (
                        <Link href="" className="flex items-center space-x-1 text-blue-600 hover:underline">
                            <LogIn size={18} />
                            <span>Login</span>
                        </Link>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t px-4 py-3">
                <nav className="flex justify-around items-center text-gray-600">
                    <Link href="/" className="flex flex-col items-center space-y-1 hover:text-gray-800">
                        <Home size={20} />
                        <span className="text-sm">TOP</span>
                    </Link>
                    <Link href="/companies" className="flex flex-col items-center space-y-1 hover:text-gray-800">
                        <Users size={20} />
                        <span className="text-sm">企業一覧</span>
                    </Link>
                    <Link href="/qr" className="flex flex-col items-center space-y-1 hover:text-gray-800">
                        <QrCode size={20} />
                        <span className="text-sm">QR表示</span>
                    </Link>
                    <Link href="/follow" className="flex flex-col items-center space-y-1 hover:text-gray-800">
                        <Heart size={20} />
                        <span className="text-sm">フォロー</span>
                    </Link>
                    {!auth.user && (
                        <Link href="/login" className="flex flex-col items-center space-y-1 hover:text-gray-800">
                            <LogIn size={20} />
                            <span className="text-sm">ログイン</span>
                        </Link>
                    )}
                </nav>
            </footer>
        </div>
    );
}
