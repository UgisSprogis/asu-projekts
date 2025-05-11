"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPage() {
    const [email, setEmail] = useState("");

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: POST uz /api/auth/forgot { email }
        alert("Ja epasts eksistē, drīz saņemsi atiestatīšanas saiti.");
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
            <form
                onSubmit={handleReset}
                className="w-full max-w-sm bg-gray-800 p-8 rounded-lg space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center">
                    Aizmirsu paroli
                </h2>
                <input
                    type="email"
                    placeholder="Ievadiet savu epastu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 rounded hover:bg-green-600 transition"
                >
                    Sūtīt atiestatīšanas saiti
                </button>
                <p className="text-center text-sm text-gray-400">
                    <Link
                        href="/auth/login"
                        className="hover:text-green-400 transition"
                    >
                        Atpakaļ uz pieslēgšanos
                    </Link>
                </p>
            </form>
        </div>
    );
}
