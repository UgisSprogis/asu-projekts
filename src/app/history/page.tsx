"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Record {
    id: string;
    timestamp: string;
}

export default function HistoryPage() {
    const [history, setHistory] = useState<Record[]>([]);

    useEffect(() => {
        const raw = localStorage.getItem("history");
        if (!raw) {
            const example: Record[] = [
                { id: "Volvo V60", timestamp: new Date().toISOString() },
            ];
            localStorage.setItem("history", JSON.stringify(example));
            setHistory(example);
        } else {
            setHistory(JSON.parse(raw));
        }
    }, []);

    return (
        <section className="max-w-3xl mx-auto py-12">
            <h1 className="text-2xl font-semibold mb-6">
                Tava meklējumu vēsture
            </h1>
            <ul className="space-y-6">
                {history.map((item) => (
                    <li
                        key={item.id}
                        className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
                    >
                        <div className="flex-1">
                            <Link
                                href={`/vehicle/${encodeURIComponent(item.id)}`}
                                className="text-lg text-green-400 hover:underline"
                            >
                                {item.id}
                            </Link>
                            <p className="text-sm text-gray-400">
                                {new Date(item.timestamp).toLocaleString(
                                    "lv-LV",
                                    {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                    }
                                )}
                            </p>
                        </div>
                        {item.id === "Volvo V60" && (
                            <Image
                                src="/images/volvo-v60.png"
                                alt="Volvo V60"
                                width={120}
                                height={80}
                                className="rounded"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
