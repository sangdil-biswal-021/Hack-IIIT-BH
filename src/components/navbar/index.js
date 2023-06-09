import classes from "./index.module.css";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';

import logo from "../../assets/logoRED.png";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenu = useMediaQuery({ query: '(max-width:815px)' });

    useEffect(() => {
        if (!mobileMenu && menuOpen) setMenuOpen(false);
    }, [mobileMenu, menuOpen])

    const mobileItemClicked = () => {
        setTimeout(() => {
            setMenuOpen(false);
        }, 300);
    }

    const { pathname } = useLocation();

    return (
        <div>
            <nav className={classes.navBar}>
                <div className={classes.innerNav}>
                    <img src={logo} alt="logo" className={classes.logo} />
                    <div className={classes.midLinks}>
                        <HashLink className={classes.navLink + (pathname === "/" ? (" " + classes.activePath) : "")} to="/">HOME</HashLink>
                        <HashLink className={classes.navLink} to="#">PRIZES</HashLink>
                        <HashLink className={classes.navLink} to="#">SESSIONS</HashLink>
                        <HashLink className={classes.navLink} to="/format">FORMAT</HashLink>
                        <HashLink className={classes.navLink} to="/sponsor">SPONSORS</HashLink>
                    </div>
                    <HashLink className={classes.btnWrap} to="#">
                        <div className={classes.svgicon} id="svg-6" data-svg-icon="assets/img/icons/shape.svg"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 188 61">
                            <path className={classes.btnPath} d="M874,554.154L893.08,524h146.67L1060,552.843,1039.75,583H893.08Z" transform="translate(-873 -523)" ></path>
                        </svg></div>
                        <span>REGISTER</span>
                    </HashLink>
                    <div className={classes.mobileMenu + (menuOpen ? (" " + classes.menuOpen) : "")} onClick={() => setMenuOpen(!menuOpen)}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div >
            </nav >
            <div className={classes.menuBack + (menuOpen ? (" " + classes.menuOpen) : "")}>
                <HashLink onClick={mobileItemClicked} className={classes.navLink + (pathname === "/" ? (" " + classes.activePath) : "")} to="/">HOME</HashLink>
                <HashLink onClick={mobileItemClicked} className={classes.navLink} to="#">PRIZES</HashLink>
                <HashLink onClick={mobileItemClicked} className={classes.navLink} to="#">SESSIONS</HashLink>
                <HashLink onClick={mobileItemClicked} className={classes.navLink} to="/format">FORMAT</HashLink>
                <HashLink onClick={mobileItemClicked} className={classes.navLink} to="/sponsor">SPONSORS</HashLink>
            </div>
        </div>
    );
}