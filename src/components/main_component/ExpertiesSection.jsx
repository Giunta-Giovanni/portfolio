// import Style
import style from "../Main.module.css";
// import Data
import expertiesData from "../../data/ExpertiesData";
// import Functions
import { generateFeatureCards } from "../../functions/generateFeatureCards";
// import Components
import ExpertiseCard from "./ExpertiseCard";

export default function ExpertiesSection() {

    return (
        <section className={style.experties_section}>
            {/* external container */}
            <div className="container">
                {/* row box */}
                <div className={`row flex-nowrap ${style.experties_row}`}>
                    {/* feature card */}
                    {generateFeatureCards(expertiesData)}
                </div>

                {/* expertise box*/}
                <div className={style.container_training}>
                    {/* generate expertise card */}
                    {expertiesData.map(item => {
                        return (
                            <ExpertiseCard
                                key={item.id}
                                item={item}
                            />
                        )
                    })}
                </div>
            </div>
        </section >
    )
}