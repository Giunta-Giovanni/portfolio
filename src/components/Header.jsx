import style from "./Header.module.css";

const navLink = ['HOME', 'EXPERTIES', 'PORTFOLIO', 'SERVIZI']

export default function Header() {
    return (
        <>
            <header className={style.header}>
                {/* external box */}
                <div className="container">

                    <nav className="navbar d-md-none">
                        {/* burgher button */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {navLink.map(link => {
                                    return (
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">{link}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </nav>

                    {/* navBar */}
                    <nav className="d-none d-md-block">
                        <ul className="row p-0">
                            {navLink.map(link => {
                                return (
                                    <li className="col">
                                        <a href="">{link}</a>
                                    </li>
                                )
                            })}

                        </ul>
                    </nav>

                </div >
            </header >
        </>
    )
}