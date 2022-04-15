import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../../assets/images/logo_mh_nav.png"

function MainTemplate (props) {
    const {footerCourseName, footerCourseLink, children, navItems} = props;
    return (
        <>
            <Header
            navItems={navItems}
            logo={Logo}
            />
            {children}
            <Footer
            courseName= {footerCourseName}
            courseLink= {footerCourseLink}
            navItems={navItems}
            />
        </>
    )
};

export default MainTemplate