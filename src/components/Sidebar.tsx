import Link from "next/link";

export default function Sidebar() {
    const samples = [
        "Volvo V60",
    ];

    return (
        <aside className="w-56 h-screen bg-gray-800 p-4 overflow-auto">
        <Link href="/history" className="block mb-4 text-gray-300 hover:text-white transition">Vēsture</Link>

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
