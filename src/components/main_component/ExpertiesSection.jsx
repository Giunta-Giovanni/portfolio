import style from "../Main.module.css";
import expertiesData from "../../data/ExpertiesData";
import { generateFeatureCards } from "../../functions/generateFeatureCards";

import ExpertiseCard from "./ExpertiseCard";

export default function ExpertiesSection() {

    return (
        <section className={style.experties_section}>
            <div className="container">
                {/* riga dei box experienze */}
                <div className={`row flex-nowrap ${style.experties_row}`}>
                    {/* Experise Card */}
                    {generateFeatureCards(expertiesData)}
                </div>

                {/* riga con formazioni*/}
                <div className={style.container_training}>
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