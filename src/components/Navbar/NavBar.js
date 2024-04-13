import React, {useState} from "react";
import "./Navbar.css"

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <a href="/" className="brand-name">Portfolio</a>
                <div className="menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <a className="menu-item" onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a className="menu-item" onClick={closeMenu}>Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" onClick={closeMenu}>Projects</a>
                    </li>
                    <li>
                        <a className="menu-item" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};