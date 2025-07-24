// import Style
import style from "../Main.module.css";

// import Functions
import { generateFeatureCards } from "../../functions/generateFeatureCards.jsx";

// import Components
import ListCard from './ListCard.jsx';

export default function ListSection({ data }) {

    return (
        <section className={style.experties_section}>
            {/* external container */}
            <div className="container">
                {/* row box */}
                <div className={`row flex-nowrap ${style.experties_row}`}>
                    {/* feature card */}
                    {/* {generateFeatureCards(data)} */}
                </div>

                {/* expertise box*/}
                <div className={style.container_training}>
                    {/* generate expertise card */}
                    {data.map(item => {
                        return (
                            <ListCard
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