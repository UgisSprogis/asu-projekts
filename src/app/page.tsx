"use client";

import { useState } from "react";
import Image from "next/image";

type CarInfo = {
    numberPlate: string;
    make: string;
    model: string;
    year: number;
    engine: string;
    gearbox: string;
    mileage: number;
    color: string;
    bodyType: string;
    nextInspection: string;
    vin: string;
    image: string;
    issues: string[];
};
const MOCK_CARS: Record<string, CarInfo> = {
    "https://www.ss.com/msg/lv/transport/cars/volkswagen/passat-b5/oddkc.html#photo-1": {
        numberPlate: "GG-6904",
        make: "Volkswagen",
        model: "Passat (B5+)​",
        year: 2003,
        engine: "1.9 dīzelis",
        gearbox: "Manuāla 5 ātrumi",
        mileage: 383_000,
        color: "Sudraba metālika",
        bodyType: "Sedans",
        nextInspection: "04.2026",
        vin: "WVWZZZ3BZ3E073103",
        image: "/images/passat.png",
        issues: [
            "Nodilusi katalizatora keramikas kodols",
            "Lambda zondes neprecīzs signāls",
            "EGR vārsta aizsērējums",
            "Turbo noplūdes vai spiediena zudums",
        ],
    },
    "5UXWX9C56D0A30788": {
        numberPlate: "N/A",
        make: "BMW",
        model: "F25​",
        year: 2012,
        engine: "2.0 N20 benzīns",
        gearbox: "automātiskā",
        mileage: 0,
        color: "Titansilber metālika",
        bodyType: "SUV",
        nextInspection: "unknown",
        vin: "5UXWX9C56D0A30788",
        image: "/images/bmw.png",
        issues: [
            "Troksnis no motora aizmugures (ķēdes rajonā)",
            "Check Engine gaisma",
            "Laika ķēdes spriegotājs un vadotnes nodilst priekšlaicīgi, īpaši agrīnajos modeļos",
            "Ķēde var izstiepties vai pat noslīdēt, radot bīstamu dzinēja sinhronizācijas zudumu",
        ],
    },

};

export default function HomePage() {
    const [plate, setPlate] = useState("");
    const [car, setCar] = useState<CarInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const info = MOCK_CARS[plate];
        if (info) {
            setCar(info);
            setError(null);
        } else {
            setCar(null);
            setError(`Dati nav pieejami transportlīdzeklim: ${plate}`);
        }
    };

    return (
            <section className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">
                Iegūsti ieskatu par transportlīdzekli
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Ievadiet valsts nr. zīmi / VIN kodu"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="text"
                    placeholder="Ievadiet informāciju par detalizētu ieskatu (nav obligāts)"
                    className="w-full h-32 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 rounded hover:bg-green-600 transition"
                >
                    Turpināt
                </button>
            </form>

            {error && <p className="text-red-500 mb-6">{error}</p>}

            {car && (
                <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Image
                                src={car.image}
                                alt={`${car.make} ${car.model}`}
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                        <table className="w-full text-left text-gray-200">
                            <tbody>
                                <tr>
                                    <td className="font-medium py-1">
                                        Valsts nr. zīme:
                                    </td>
                                    <td className="py-1">{car.numberPlate}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">Marka:</td>
                                    <td className="py-1">
                                        {car.make} {car.model}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        Izlaiduma gads:
                                    </td>
                                    <td className="py-1">{car.year}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        Motors:
                                    </td>
                                    <td className="py-1">{car.engine}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        Ātrumkārba:
                                    </td>
                                    <td className="py-1">{car.gearbox}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        Nobraukums, km:
                                    </td>
                                    <td className="py-1">
                                        {car.mileage.toLocaleString()}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">Krāsa:</td>
                                    <td className="py-1">{car.color}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        Virsbūves tips:
                                    </td>
                                    <td className="py-1">{car.bodyType}</td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        Nāk. apskate:
                                    </td>
                                    <td className="py-1">
                                        {car.nextInspection}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-medium py-1">
                                        VIN kods:
                                    </td>
                                    <td className="py-1 font-mono">
                                        {car.vin}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">
                            Iespējamās problēmas
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-200">
                            {car.issues.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
