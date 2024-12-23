import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/logo_and_banner/bannerImg.png"
import "./Banner.css"
const Banner = () => {
     return (
       <div id="banner">
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
         <img src={bannerImg} alt="" />
       </div>
     );
};

export default Banner;