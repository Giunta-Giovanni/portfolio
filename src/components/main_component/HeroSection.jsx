import style from "../Main.module.css";
export default function HeroSection() {
    return (
        <section className={style.heroSection}>
            {/* riga */}
            <div className="row">
                {/* colonna sinistra */}
                <div className="col-7" style={{ backgroundColor: 'red' }}>
                    <h1>CATCH PHRASE</h1>
                    <h5>Titolo Presentazione</h5>

                </div>
                {/* colonna destra */}
                <div className="col-5" style={{ backgroundColor: 'blue' }}>
                </div>
            </div>
        </section>
    )
}