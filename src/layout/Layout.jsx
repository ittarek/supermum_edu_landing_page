
import { Outlet } from 'react-router-dom';
import NavBar from './../Components/Shared/Hearder/NavBar';
import Footer from '../Components/Shared/Footer/Footer';


const Layout = () => {
     return (
       <div>
         <NavBar />
         <main>
           <Outlet />
         </main>
         <Footer />
       </div>
     );
};

export default Layout;