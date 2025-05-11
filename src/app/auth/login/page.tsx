"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: POST uz /api/auth/login
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm bg-gray-800 p-8 rounded-lg space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center">
                    Pieslēgties
                </h2>
                <input
                    type="text"
                    placeholder="Lietotājvārds"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="password"
                    placeholder="Parole"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 rounded hover:bg-green-600 transition"
                >
                    Pieslēgties
                </button>

                <div className="flex justify-between text-sm text-gray-400">
                    <Link
                        href="/auth/register"
                        className="hover:text-green-400 transition"
                    >
                        Reģistrēties
                    </Link>
                    <Link
                        href="/auth/forgot"
                        className="hover:text-green-400 transition"
                    >
                        Aizmirsu paroli
                    </Link>
                </div>
            </form>
        </div>
    );
}
