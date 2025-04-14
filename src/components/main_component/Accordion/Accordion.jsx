import style from "./accordion.module.css";
export default function AccordionItem({ isActive, onClick }) {
    return (

        // Accordion Item
        <div className={`${style.item} ${isActive ? style.active : ''}`} onClick={onClick}>
            {/* icon */}
            <div className={`${style.icon_container}  ${isActive ? style.active : ''}`}>
                <div className={`${style.stroke_one}  ${isActive ? style.active : ''}`}></div>
                <div className={`${style.stroke_two}`}></div>
            </div>

            {/* accordion title */}
            <div className="row">
                <div className="col-7">
                    <h1 className={style.title}>Introduction to React JS</h1>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <div className={style.project_link_box}>
                    </div>
                    <div className={style.project_link_box}>
                    </div>
                </div>

                {/* accordion content */}
                <p className={`${style.content}  ${isActive ? style.active : ''}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis aperiam ipsam repellendus eos sint incidunt voluptatibus sequi nisi, a laboriosam, sit ratione officia consequatur corporis tenetur corrupti delectus aliquid.
                </p>

            </div>


        </div >
    )
}