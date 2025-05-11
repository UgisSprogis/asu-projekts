"use client";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (pass !== pass2) return alert("Paroles nesakrīt!");
        // TODO: POST uz /api/auth/register { email, user, pass }
    };

    return (
        <form
            onSubmit={handleRegister}
            className="max-w-sm mx-auto mt-12 space-y-4"
        >
            <input
                type="email"
                placeholder="E-pasts"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
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
            <input
                type="password"
                placeholder="Apstiprināt paroli"
                value={pass2}
                onChange={(e) => setPass2(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
                type="submit"
                className="w-full py-2 bg-green-500 rounded hover:bg-green-600"
            >
                Reģistrēties
            </button>
        </form>
    );
}
