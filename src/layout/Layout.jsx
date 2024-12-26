
import { Outlet } from 'react-router-dom';
import NavBar from './../Components/Shared/Hearder/NavBar';
import Footer from '../Components/Shared/Footer/Footer';


const Layout = () => {
     return (
          <div>
               <NavBar/>
            <Outlet/>   
            <Footer/>
          </div>
     );
};

export default Layout;