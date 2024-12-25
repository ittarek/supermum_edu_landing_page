import logo from "../../assets/images/logo_and_banner/Logo.png"
import Container from "../ShareComponetns/Container";
import "./NavBar.css"
const navItems =
     <>
     <li>Home</li>
     <li>profile</li>
     <li>Courses</li>
     <li>Contact</li>
     </>

const NavBar = () => {
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
         </div>
       </Container>
     );
};

export default NavBar;