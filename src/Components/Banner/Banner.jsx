import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/logo_and_banner/bannerImg.png"
import "./Banner.css"
import Container from "../ShareComponetns/Container";
const Banner = () => {
     return (
       <Container>
         <div id="banner_container">
           {/* banner details */}
           <div className="banner_details">
             <h1>Discover best classes for the best learning</h1>
             <p className="banner_text">
               We designed Connections Academy to give students all across the
               nation a tuition-free online public school that lets them learn.
             </p>
             <button type="button">Get Started</button>
             <p className="learn_more">
               Not sure when to start? <Link to="#">Learn more</Link>
             </p>
           </div>
           {/* banner image */}
           <div className="banner_img">
             <img src={bannerImg} alt="" />
           </div>
         </div>
       </Container>
     );
};

export default Banner;