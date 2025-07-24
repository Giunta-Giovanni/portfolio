// import fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import linkData from "../data/linkData";

// import style
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                {/* external container */}
                <div className="container">
                    <div className={style.channel_dimension_box}>
                        {/* channel */}
                        <div className={`row ${style.channel_box}`}>
                            {linkData.map(link => {
                                return (
                                    <div key={link.id} className="col">
                                        <div className={style.single_channel}>
                                            <a href={link.link}>
                                                <img src={link.image} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}