import style from "../Main.module.css";

export default function ExpertiseCard({ item }) {
    return (
        <div className="row py-3">
            {/* colonna con cerchio */}
            <div className="col-3 col-md-2 p-0 ">
                <div className={style.circle}></div>
            </div>
            {/* colonna con formazione */}
            <div className="col-9 col-md-10">
                <div className={style.box_training}>
                    <h6>{item.title}</h6>
                    <p>{item.abstract}</p>
                </div>
            </div>
        </div>
    )
}                   
