// import hooks
import { useContext } from "react";

// import context
import cvContext from "../../context/cvContext";

// import data
import linkData from "../../data/linkData";

// import assets
import luca from '../../assets/img/luca.png';

// import style
import style from "../Main.module.css";

export default function HeroSection() {

    const { sections } = useContext(cvContext)

    return (
        <section ref={sections.home} className={style.heroSection}>
            <div className="container">
                {/* riga */}
                <div className="row">
                    {/* colonna sinistra */}
                    <div className="col-12 col-md-8 py-4">
                        {/* riga foto profilo (only mobile) & titolo*/}
                        <div className="row align-items-center">
                            {/* colonna sinistra con foto profilo*/}
                            <div className={`col-5 d-md-none`}>
                                {/* box foto */}
                                <div className={style.profile_circle}>
                                    <img src={luca} alt="Foto profilo mobile" />
                                </div>
                            </div>
                            {/* colonna destra con titolo */}
                            <div className="col-7 col-md-12">
                                <h2 className={style.catch_phrase}>
                                    Catch phrase
                                </h2>
                            </div>
                        </div>

                        {/* box presentazione */}
                        <div className={style.box_presentation}>
                            <h5>Titolo Presentazione</h5>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex laudantium illum dignissimos eos accusamus quas! Neque, voluptate! Nobis magni aspernatur, impedit fugit, totam beatae illum sequi perferendis reiciendis minima officiis?
                            </p>
                            {/* riga per link */}
                            <div className={`row ${style.channel_box}`}>
                                {linkData.map(link => {
                                    return (
                                        <div key={link.id} className="col">
                                            <div className={style.channel}>
                                                <a href={link.link}>
                                                    <img src={link.image} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="col">
                                    <div className={style.channel}>
                                        <a href="">
                                            {/* <img src={linkedin} alt="linkedin" /> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={style.channel}>
                                        <a href="">
                                            {/* <img src={email} alt="email" /> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={style.channel}>
                                        <a href="">
                                            {/* <img src={orcid} alt="orcid" /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* colonna destra */}
                    <div className={`d-sm-none d-md-block col-4 ${style.profile}`}>
                        {/* foto profilo */}
                        <div className={style.profile_box_image}>
                            <img src={luca} alt="Foto profilo desktop" />
                        </div>
                    </div>
                </div>
            </div>

            {/* banner next section */}
            <div ref={sections.experience} className={style.banner_section}>
                <h1 className={style.banner_title}>EXPERIENCE.</h1>
            </div>

        </section >
    )
}