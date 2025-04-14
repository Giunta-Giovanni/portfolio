import { useState } from "react";
import ProjectCard from "./ProjectCard";
// importiamo lo stile
import style from "../Main.module.css";

const portfolioData = [
    {
        id: 1,
        immagine: "/public/telaio_bicicletta.png",
        tile: "Telaio",
        title: "Design Telaio in Carbonio",
        abstract: "Progettazione CAD/CAE di un telaio per bici da corsa, ottimizzato per leggerezza e resistenza con analisi strutturale e test virtuali."
    },
    {
        id: 2,
        immagine: "/public/scocca_auto.png",
        tile: "Carrozzeria",
        title: "Studio di Carrozzeria Aerodinamica",
        abstract: "Sviluppo di una carrozzeria in materiali compositi con simulazioni CFD per migliorare le performance di un'auto da corsa."
    },
    {
        id: 3,
        immagine: "/public/ala_posteriore.png",
        tile: "Ala",
        title: "Ottimizzazione Ala Posteriore",
        abstract: "Analisi fluidodinamica e strutturale di un'ala posteriore da competizione per aumentare il carico aerodinamico e la stabilità."
    },
    {
        id: 4,
        immagine: "/public/volante_carbonio.png",
        tile: "Volante",
        title: "Progettazione Volante in Carbonio",
        abstract: "Realizzazione di un volante racing ergonomico e leggero, con analisi FEM per garantire sicurezza e rigidità."
    },
    {
        id: 5,
        immagine: "/public/sedile_racing.png",
        tile: "Sedile",
        title: "Sedile Racing in Fibra",
        abstract: "Sviluppo e produzione artigianale di un sedile racing in fibra di carbonio con comfort, sicurezza e performance."
    }
];

export default function PortfolioSection() {

    const [currentlyActive, setCurrentlyActive] = useState(null)

    const handleAccordionClick = (newActiveAccordion) => {
        setCurrentlyActive(newActiveAccordion === currentlyActive ? null : newActiveAccordion)
    };


    return (
        <section>
            {/* banner next section */}
            <div className={style.banner_section}>
                <h1 className={`${style.banner_title} text-end`}>PORTFOLIO.</h1>
            </div>

            {/* external container */}
            <div className="container">
                {/* project card box  */}
                <div className={style.project_card_box}>
                    {/* project card */}
                    {portfolioData.map(item => {
                        return (
                            <ProjectCard
                                key={item.id}
                                item={item}
                                currentlyActive={currentlyActive}
                                handleAccordionClick={handleAccordionClick}
                            />
                        )
                    })}

                </div>
            </div>
        </section >
    )
}