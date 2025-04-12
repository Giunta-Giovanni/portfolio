import style from "./Header.module.css";

const navLink = ['HOME', 'EXPERTIES', 'PORTFOLIO', 'SERVIZI']

export default function Header() {
    return (
        <>
            <header className={style.header}>
                {/* external box */}
                <div className={`container`}>
                    <div className={style.nav_container}>
                        {/* navBar-tablet & pc*/}
                        <nav className="d-none d-md-block">
                            <ul className="row p-0 m-0">
                                {navLink.map((link, index) => {
                                    return (
                                        <li className="col" key={index}>
                                            <a href="">{link}</a>
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>

                        {/* navbar-mobile */}
                        <div className="row w-100 m-0">
                            <div className="col-12 p-0">
                                <nav className="navbar d-md-none">
                                    {/* burgher button */}
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse w-100 mt-2" id="navbarTogglerDemo02">
                                        <ul className="navbar-nav w-100 text-center mb-2 mb-lg-0 p-0 m-0">
                                            {navLink.map((link, index) => {
                                                return (
                                                    <li className="nav-item w-100" key={index}>
                                                        <a className="nav-link active" aria-current="page" href="#">{link}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div >
            </header >
        </>
    )
}