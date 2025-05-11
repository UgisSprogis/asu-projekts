import Link from "next/link";

export default function Sidebar() {
    const samples = [
        "AK-47",
        "M4A1",
        "M4A4",
        "AWP",
        "USP-S",
        "FAMAS",
    ];

    return (
        <aside className="w-56 h-screen bg-gray-800 p-4 overflow-auto">
            <h1 className="text-lg font-bold text-gray-300 mb-2 underline">Vēsture</h1>

            <ul className="space-y-2">
                {samples.map((s) => (
                    <li key={s}>
                        <Link
                            href={`/vehicle/${encodeURIComponent(s)}`}
                            className="block text-gray-300 hover:text-white transition"
                        >
                            {s}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
