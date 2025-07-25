// import Hooks
import { useContext } from "react";
// import Contexts
import cvContext from "../../context/cvContext";
// import Styles
import style from "../Main.module.css";
// import Data
import serviceData from "../../data/ServiceData";
// import functions
import { generateFeatureCards } from "../../functions/generateFeatureCards";


export default function ServiceSection() {

    return (
        <section>
            {/* external container */}
            <div className="container py-5">
                <div className={`row flex-nowrap ${style.experties_row}`}>
                    {/* Experise Card */}
                    {/* {serviceData.map(item => {
                        console.log(item)
                        return (
                            <FeatureCard
                                key={item.id}
                                item={item}
                            />
                        )
                    })} */}
                    {generateFeatureCards(serviceData)}


                </div>
            </div>
        </section>
    )
}