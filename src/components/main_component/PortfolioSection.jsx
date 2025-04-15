import { useState } from "react";
import ProjectCard from "./ProjectCard";
import portfolioData from "../../data/PortfolioData";
// importiamo lo stile
import style from "../Main.module.css";



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
                        console.log(item)
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