// import style
import style from "../Main.module.css";

export default function ListCard({ item }) {
    return (
        <div className="row py-3">
            {/* col with logo */}
            <div className="col-3 col-md-2 p-0 ">
                <div className={style.circle}></div>
            </div>
            {/* col with text */}
            <div className="col-9 col-md-10">

                <div className={style.box_training}>
                    <h6>{item.title}</h6>
                    <p>{item.abstract}</p>
                </div>
            </div>
        </div>
    )
}                   
