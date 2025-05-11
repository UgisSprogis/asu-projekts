import Image from "next/image";
import { Metadata } from "next";

interface VehiclePageProps {
    params: { id: string };
}

export async function generateMetadata({
    params,
}: VehiclePageProps): Promise<Metadata> {
    return { title: `Transportlīdzeklis ${params.id}` };
}

export default function VehiclePage({ params }: VehiclePageProps) {
    const { id } = params;

    const sampleData: Record<
        string,
        {
            make: string;
            model: string;
            year: number;
            mileage: number;
            image: string;
        }
    > = {
        "Volvo V60": {
            make: "Volvo",
            model: "V60",
            year: 2018,
            mileage: 239439,
            image: "/images/volvo-v60.png",
        },
    };

    const info = sampleData[id] ?? {
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
            {info.image && (
                <Image
                    src={info.image}
                    alt={`${info.make} ${info.model}`}
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            )}
        </section>
    );
}
