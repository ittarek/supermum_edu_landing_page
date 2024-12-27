import { useState } from "react";
import logo from "../../../assets/images/logo_and_banner/Logo.png"
import Container from "../../ShareComponents/Container";
import "./NavBar.css"
import { Twirl as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from "react-router-dom";
const navItems = (
  <>
    <li>
      <NavLink to="/" activeClassName="active" className="navLink">
        Home
      </NavLink>
    </li>
    <NavLink className="navLink" activeClassName="active">
      <li>profile</li>
    </NavLink>
    <NavLink className="navLink" activeClassName="active">
      <li>Courses</li>
    </NavLink>
    <NavLink className="navLink" activeClassName="active">
      <li>Contact</li>
    </NavLink>
  </>
);

// for responsive  menu
const customStyles = {
  bmMenu: {
    background: "#373a47",
    fontSize: "1.15em",
    marginLeft: "-100px",
    listStyle: "none",
    lineHeight: "50px",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    cursor: "pointer",
  },

};
const NavBar = () => {
     const [isOpen, setOpen] = useState(false);


     return (
       <Container>
         <nav id="nav_main">
           {/* logo */}
           <div className="site_logo">
             <Link to="/">
               <img src={logo} alt="site logo" loading="lazy" />
             </Link>
           </div>

           {/* navItems */}
           <div className="nav_items">
             <ul>
               {navItems}
             </ul>
           </div>
           {/* sing in button */}
           <div className="sign_in_btn">
             <button type="button">Sign In</button>
           </div>

           {/* for mobile device items */}
           <div className="mobile_device_items">
             <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
             <Menu
               isOpen={isOpen}
               onStateChange={({ isOpen }) => setOpen(isOpen)}
               customBurgerIcon={false}
               styles={customStyles}
             >
               {navItems}
               <div className="sign_in_btn_mobile">
                 <button type="button">Sign In</button>
               </div>
             </Menu>
           </div>
         </nav>
       </Container>
     );
};

export default NavBar;