
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header className="header">

            <div className="container">

                <div className="row align-items-center header__row">

                    <div className="col-12 col-md-3">

                        <div className="header__logo">
                            <h1>EduNexa</h1>
                        </div>

                    </div>

                    <div className="col-12 col-md-6">

                        <nav className="header__nav">
                            <a href="/">Home</a>
                            <a href="/courses">Courses</a>
                            <a href="/programs">Programs</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </nav>

                    </div>

                    <div className="col-12 col-md-3">

                        <div className="header__action">
                            <button>
                                <Link to="/Aadharcard">
                                    LogIn
                                </Link>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;

