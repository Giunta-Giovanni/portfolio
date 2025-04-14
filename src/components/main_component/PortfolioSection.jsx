import { useState } from "react";
import AccordionItem from "./Accordion/Accordion";
// importiamo lo stile
import style from "../Main.module.css";


export default function PortfolioSection() {

    const [currentlyActive, setCurrentlyActive] = useState(2)

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
                    <div className={style.project_card}>
                        {/* box image */}
                        <div className={style.project_card_image}>
                            <img src="./public/team_work.png"></img>
                        </div>
                        <AccordionItem
                            isActive={currentlyActive === 1}
                            onClick={() => handleAccordionClick(1)}
                        />
                    </div>
                    <div className={style.project_card}>
                        {/* box image */}
                        <div className={style.project_card_image}>
                            <img src="./public/team_work.png"></img>
                        </div>
                        <AccordionItem
                            isActive={currentlyActive === 2}
                            onClick={() => handleAccordionClick(2)}
                        />
                    </div>
                    <div className={style.project_card}>
                        {/* box image */}
                        <div className={style.project_card_image}>
                            <img src="./public/team_work.png"></img>
                        </div>
                        <AccordionItem
                            isActive={currentlyActive === 3}
                            onClick={() => handleAccordionClick(3)}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}