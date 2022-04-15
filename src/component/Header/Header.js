import react, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarText} from "reactstrap"
import {NavLink as RouterLink} from "react-router-dom";
import style from "./Header.module.css";


const Header = (props) => {
    const {logo, navItems} = props;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const itemList = navItems.map((item) => {
        return(
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink 
                exact={item.exact}
                activeClassName={style.active}
                to={item.url}
                className="nav-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        )
    });
  return(
    <div className={style.navBar}>
        <Navbar className="py-0" expand="md" full light>
            <div className="container">
                <div className="row" id={style.line}>
                    <div className="col-12 col-md-6 d-flex justify-content-between">
                        <NavbarBrand className={style.brandLogo}>
                            <RouterLink to="/">
                                <img className={style.logo} src={logo} alt="Monster Hunter"/>
                            </RouterLink>
                        </NavbarBrand>
                        <NavbarToggler className="ms-auto" onClick={toggle} />
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <Collapse className="align-self-center" isOpen={isOpen} navbar>
                            <Nav id={style.navvino} className="ms-auto" navbar>
                            {itemList} 
                            </Nav>
                        </Collapse>
                    </div>
                </div>
            </div> 
        </Navbar>
    </div>
  )}

  export default Header;