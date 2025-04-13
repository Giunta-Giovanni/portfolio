import style from "../Main.module.css";
export default function ExpertiesSection() {
    return (
        <section className={style.experties_section}>
            <div className="container">
                {/* riga dei box experienze */}
                <div className={`row ${style.experties_row}`}>
                    {/* colonna */}
                    <div className="col">
                        <div className={style.expertise_box}>
                        </div>
                        <h4 className={style.expertise_title}>PRIMO</h4>
                    </div>
                    {/* colonna */}
                    <div className="col">
                        <div className={style.expertise_box}>
                        </div>
                        <h4 className={style.expertise_title}>SECONDO</h4>
                    </div>
                    {/* colonna */}
                    <div className="col">
                        <div className={style.expertise_box}>
                        </div>
                        <h4 className={style.expertise_title}>TERZO</h4>
                    </div>
                </div>

                {/* riga con formazioni*/}
                <div className={style.container_training}>
                    <div className="row py-4">
                        {/* colonna con cerchio */}
                        <div className="col-3 col-md-2">
                            <div className={style.circle}></div>
                        </div>
                        {/* colonna con formazione */}
                        <div className="col-9 col-md-10">
                            <div className={style.box_training}>
                                <h6>Titolo Formazione</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur quos molestiae assumenda error non beatae corporis illo saepe accusantium at vel inventore, ex harum impedit facilis qui explicabo nisi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        {/* colonna con cerchio */}
                        <div className="col-3 col-md-2">
                            <div className={style.circle}></div>
                        </div>
                        {/* colonna con formazione */}
                        <div className="col-9 col-md-10">
                            <div className={style.box_training}>
                                <h6>Titolo Formazione</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur quos molestiae assumenda error non beatae corporis illo saepe accusantium at vel inventore, ex harum impedit facilis qui explicabo nisi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        {/* colonna con cerchio */}
                        <div className="col-3 col-md-2">
                            <div className={style.circle}></div>
                        </div>
                        {/* colonna con formazione */}
                        <div className="col-9 col-md-10">
                            <div className={style.box_training}>
                                <h6>Titolo Formazione</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur quos molestiae assumenda error non beatae corporis illo saepe accusantium at vel inventore, ex harum impedit facilis qui explicabo nisi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        {/* colonna con cerchio */}
                        <div className="col-3 col-md-2">
                            <div className={style.circle}></div>
                        </div>
                        {/* colonna con formazione */}
                        <div className="col-9 col-md-10">
                            <div className={style.box_training}>
                                <h6>Titolo Formazione</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur quos molestiae assumenda error non beatae corporis illo saepe accusantium at vel inventore, ex harum impedit facilis qui explicabo nisi!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}