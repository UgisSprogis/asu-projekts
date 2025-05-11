export default function AboutPage() {
    return (
        <section className="max-w-3xl mx-auto space-y-12 py-12">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h1 className="text-2xl font-semibold mb-4">Par mums</h1>
                <p className="leading-relaxed">
                    Lietotājs ievada mašīnas VIN vai valsts NR-zīmi, vai linku
                    no mājaslapas (piemēram, ss.com). Sistēma automātiski izgūst
                    informāciju no Ceļu satiksmes drošības direkcijas par
                    attiecīgās mašīnas tehniskās apskates datiem. Tehniskās
                    apskates datu apstrādi veic MI rīki, kas piemeklē konkrētā
                    auto visbiežākās problēmas un lietotājam sniedz iegūto
                    informāciju. Lietotājam ir iespēja pieprasīt vēl papildu
                    specifikācijas datus par attiecīgo mašīnu vai uzdot
                    jautājumus par konkrēto automašīnu.
                </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                    Noteikumi un nosacījumi
                </h2>
                <p className="leading-relaxed">
                    <strong>Vispārīgie noteikumi:</strong> Lietojot “ASU
                    Transport Insights”, Lietotājs piekrīt šiem noteikumiem.
                    Pakalpojums sniedz informāciju par automašīnu tehniskajiem
                    datiem, izmantojot publiskos CSDD datus un mākslīgo
                    intelektu. Informācija ir informatīva un neaizvieto
                    oficiālus slēdzienus.
                    <br />
                    <br />
                    <strong>Lietotāja pienākumi:</strong> Lietotājs ir atbildīgs
                    par ievadīto datu precizitāti un apņemas neizmantot
                    Pakalpojumu nelikumīgiem mērķiem.
                    <br />
                    <br />
                    <strong>Datu aizsardzība:</strong> Pakalpojums ievēro GDPR
                    un Latvijas likumus. Dati tiek glabāti tikai ar Lietotāja
                    piekrišanu.
                    <br />
                    <br />
                    <strong>Atbildības ierobežojumi:</strong> Pakalpojums
                    nesniedz garantijas par datu pilnīgumu vai precizitāti.
                    Lietotājs pats atbild par lēmumiem, kas balstīti uz iegūto
                    informāciju.
                    <br />
                    <br />
                    <strong>Autortiesības:</strong> Pakalpojuma saturs ir
                    aizsargāts ar autortiesībām. To nedrīkst kopēt vai izplatīt
                    bez atļaujas.
                </p>
            </div>
        </section>
    );
}
