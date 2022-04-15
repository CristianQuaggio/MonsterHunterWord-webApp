import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Footer.module.css"; 
import logo_unimib from "../../assets/images/logo_unimib.png";
import mh_logo from "../../assets/images/mh_logo.png";
import {NavLink} from "react-router-dom"

function Footer(props) {
    const {courseName, courseLink, navItems} = props;
    const itemList = navItems.map((item) => {
        return (
            <li key={item.url} className={style.navItems}>
                <NavLink 
                exact = {item.exact}
                activeClassName = {style.active}
                to = {item.url}
                >
                {item.text}
                </NavLink>
            </li>
        )

    });

    return (

        <footer className="mt-4">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-4">
                        <nav className={style.footerNav}>
                            <ul className="nav flex-column">
                                {itemList}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12 my-2 col-md-6">
                                <div className="d-flex" className={style.copyright}>
                                    <div className="d-flex align-self-center" id={style.course}>
                                        <a href={courseLink} target="_blank">
                                            {courseName}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col my-2 d-flex col-md-6">
                                <div id={style.mh_logo} className={style.logo}>
                                    <a href="https://www.monsterhunter.com/" target="blank">
                                        <img src={mh_logo} alt="logo monster hunter"/>
                                    </a>
                                </div>
                                <div id={style.logo_unimib} className={style.logo}>
                                    <a href="http://www.unimib.it" target="blank">
                                        <img src={logo_unimib} alt="logo unimib"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;