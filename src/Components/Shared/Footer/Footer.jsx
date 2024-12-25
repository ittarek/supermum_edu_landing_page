import "./Footer.css"
import footerLogo from "../../../assets/images/logo_and_banner/Logo.png";
import playStoreImg from "../../../assets/images/logo_and_banner/GooglePlaylogo.png";
import appStoreImg from "../../../assets/images/logo_and_banner/Applelogo.png";
import Container from './../../ShareComponetns/Container';





const Footer = () => {
  return (
    <Container>
      <div id="footer_component">
        {/* footer summery */}
        <div className="footer_summery">
          <img src={footerLogo} alt="footer image" />
          <p>
            Our motto to fulfill customer demand by making them satisfied with
            growing their business.
          </p>
        </div>

        {/* footer  navigation items 1*/}
        <div className="footer_first_navigation">
          <ul>
            <li>About</li>
            <li>About us</li>
            <li>Features</li>
            <li>News</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
        {/* footer  navigation items 2*/}
        <div className="footer_second_navigation">
          <ul>
            <li>Support</li>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* app link */}
        <div className="get_app">
          <h3>Get our app</h3>

          {/* play store */}
          <div className="play_store_app">
            <img src={playStoreImg} alt="play store image" />
            <div className="play_store_text">
              <p>GET IT ON</p>
              <h4>Google Play</h4>
            </div>
          </div>

          {/* app store */}
          <div className="app_store_app">
            <img src={appStoreImg} alt="app store image" />
            <div>
              <p>Download on the</p>
              <h4>App Store</h4>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* footer bottom */}
      <div className="footer_bottom">
        <p>Copyright Besnik 2021 All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
