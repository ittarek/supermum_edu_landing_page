import "./Sponsor.css"
import sponsor1 from "../../assets/images/sponsor_image/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor_image/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor_image/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor_image/sponsor4.png";

const sponsorItems =[
     {
          sponsorImg: sponsor1
     },
     {
          sponsorImg: sponsor2
     },
     {
          sponsorImg: sponsor3
     },
     {
          sponsorImg: sponsor4
     },

]
const Sponsor = () => {
     return (
       <div id="sponsor">
         <div className="sponsor_details">
           <h1>400+</h1>
           <p>Universities worldwide that partner with us</p>
         </div>
     
           {sponsorItems.map((data, index) => (
             <div key={index} className="sponsor_partner">
               <img src={data.sponsorImg} alt="" />
             </div>
           ))}
  
       </div>
     );
};

export default Sponsor;