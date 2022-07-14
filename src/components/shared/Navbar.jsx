import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkMode";
import { Context } from "../../store/AppContext";

const Navbar = () => {

    const { store, actions } = useContext(Context);

    const { theme, setTheme } = useContext(DarkModeContext);

    useEffect(() => {
        console.log(theme);
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <div className="container px-5">
                <Link className="navbar-brand" to="/">
                    Start Bootstrap
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex">
                        <div className="form-check form-switch my-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={theme === 'dark' ? true : false} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{theme === 'dark' ? (<i className="bi bi-sun-fill text-light"></i>) : (<i className="bi bi-moon-fill"></i>)}</label>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="active" exact>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownBlog"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/blog">
                                        Blog Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/post">
                                        Blog Post
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownPortfolio"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Portfolio
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/portfolio/detail">
                                        Portfolio Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/portfolio">
                                        Portfolio Item
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownPortfolio"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {store.name} {store.lastname}
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/portfolio/detail">
                                        Salir
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;