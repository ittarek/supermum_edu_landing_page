import { useState } from "react";
import logo from "../../../assets/images/logo_and_banner/Logo.png"
import Container from "../../ShareComponetns/Container";
import "./NavBar.css"
import { Twirl as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
const navItems =
     <>
     <li>Home</li>
     <li>profile</li>
     <li>Courses</li>
     <li>Contact</li>
     </>

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

     const handleStateChange = state => {
       setOpen(state.isOpen);
     };
     return (
       <Container>
         <div id="nav_main">
           {/* logo */}
           <div className="site_logo">
             <img src={logo} alt="logo" />
           </div>

           {/* navItems */}
           <div className="nav_items">
             <ul>{navItems}</ul>
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
               onClick={handleStateChange}
               customBurgerIcon={false}
               styles={customStyles}
             >
               {navItems}

               <div className="sign_in_btn_mobile">
                 <button type="button">Sign In</button>
               </div>
             </Menu>
           </div>
         </div>
       </Container>
     );
};

export default NavBar;