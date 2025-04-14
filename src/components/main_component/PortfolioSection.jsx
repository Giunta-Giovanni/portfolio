import { useState } from "react";
import ProjectCard from "./ProjectCard";
// importiamo lo stile
import style from "../Main.module.css";

const portfolioData = [
    {
        id: 1,
        immagine: "/public/monoscocca_carbonio.png",
        tile: "Monoscocca",
        titolo: "Progettazione Monoscocca in Carbonio",
        descrizione: "Studio e realizzazione CAD/CAE di una monoscocca in fibra di carbonio per veicolo da competizione, con analisi FEM per verificare la resistenza strutturale."
    },
    {
        id: 2,
        immagine: "/public/simulazione_flussi.png",
        tile: "Aerodinamica",
        titolo: "CFD per Ottimizzazione Aerodinamica",
        descrizione: "Simulazione fluidodinamica di un prototipo racing con l'obiettivo di ridurre la resistenza aerodinamica e migliorare il carico. Analisi eseguita su superfici in carbonio."
    },
    {
        id: 3,
        immagine: "/public/lavorazione_carbonio.png",
        tile: "Laminazione",
        titolo: "Produzione Manuale in Laminazione",
        descrizione: "Realizzazione manuale di componenti strutturali in fibra di carbonio con tecnica wet layup e post-curing in autoclave. Controllo qualità e rifinitura inclusi."
    },
    {
        id: 4,
        immagine: "/public/lavorazione_carbonio.png",
        tile: "Laminazione",
        titolo: "Produzione Manuale in Laminazione",
        descrizione: "Realizzazione manuale di componenti strutturali in fibra di carbonio con tecnica wet layup e post-curing in autoclave. Controllo qualità e rifinitura inclusi."
    },
    {
        id: 5,
        immagine: "/public/lavorazione_carbonio.png",
        tile: "Laminazione",
        titolo: "Produzione Manuale in Laminazione",
        descrizione: "Realizzazione manuale di componenti strutturali in fibra di carbonio con tecnica wet layup e post-curing in autoclave. Controllo qualità e rifinitura inclusi."
    }

]

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