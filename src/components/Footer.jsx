// import fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
                        <div className={`row row-cols-4 ${style.channel_box}`}>
                            {/* Linkedin */}
                            <div className={`col ${style.single_channel}`}>
                                <a href="">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            {/* twitter */}
                            <div className={`col ${style.single_channel}`}>
                                <a href="">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            {/* facebook */}
                            <div className={`col ${style.single_channel}`}>
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                            {/* instagram */}
                            <div className={`col ${style.single_channel}`}>
                                <a href="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}