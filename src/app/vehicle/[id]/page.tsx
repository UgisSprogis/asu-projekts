'use client'
'use client'
import { use } from 'react'
import Image from "next/image"
import Link from "next/link"

interface VehiclePageProps {
    params: Promise<{ id: string }>
}

export default function VehiclePage({ params }: VehiclePageProps) {
    const { id } = use(params)

    if (id !== "Volvo V60") {
        return (
            <div className="text-center py-12">
                <p className="mb-4">
                    Nav pieejama informācija transportlīdzeklim:{" "}
                    <strong>{id}</strong>
                </p>
                <Link href="/" className="text-green-400 hover:underline">
                    Atpakaļ uz sākumlapu
                </Link>
            </div>
        )
    }

    const info = {
        make: "Volvo",
        model: "V60",
        year: 2018,
        mileage: 239439,
        image: "/images/volvo-v60.png",
    };

    return (
        <section className="max-w-3xl mx-auto space-y-4 py-12">
            <h1 className="text-2xl font-semibold">
                {info.make} {info.model}
            </h1>
            <p>Gada modelis: {info.year}</p>
            <p>Nobraukums: {info.mileage.toLocaleString()} km</p>

            <div className="mt-4">
                <Image
                    src={info.image}
                    alt={`${info.make} ${info.model}`}
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </section>
    );
}
