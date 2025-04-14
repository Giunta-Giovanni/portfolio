import style from "./accordion.module.css";
export default function AccordionItem({ isActive, onClick, item }) {
    return (

        // Accordion Item
        <div className={`${style.item} ${isActive ? style.active : ''}`} onClick={onClick}>
            {/* icon */}


            {/* accordion title */}
            <div className="row align-items-center">
                <div className="col-1 p-0">
                    <div className={style.test}></div>
                    <div className={` ${style.icon_container}  ${isActive ? style.active : ''}`}>
                        <div className={`${style.stroke_one}  ${isActive ? style.active : ''}`}></div>
                        <div className={`${style.stroke_two}`}></div>
                    </div>

                </div>
                <div className="col-8 p-0 ">
                    <h1 className={style.tile}>{item.tile}</h1>
                </div>

                <div className="col-3 d-flex justify-content-end align-items-center">
                    <div className={style.project_link_box}>
                    </div>
                    <div className={style.project_link_box}>
                    </div>
                </div>

                {/* accordion content */}

                <div className={`${style.content}  ${isActive ? style.active : ''}`}>
                    <h2>
                        {item.title}
                    </h2>
                    <p>
                        {item.abstract}
                    </p>

                </div>

            </div>


        </div >
    )
}