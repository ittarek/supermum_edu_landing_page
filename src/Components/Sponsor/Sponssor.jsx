import "./Sponsor.css";
import sponsor1 from "../../assets/images/sponsor_image/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor_image/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor_image/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor_image/sponsor4.png";

const sponsorItems = [
  { id: 1, img: sponsor1 },
  { id: 2, img: sponsor2 },
  { id: 3, img: sponsor3 },
  { id: 4, img: sponsor4 },
];

const Sponsor = () => {
  return (
    <div id="sponsor_container">
      <div className="sponsor_details">
        <h1>400+</h1>
        <p>Universities worldwide that partner with us</p>
      </div>

      {sponsorItems.map((data) => (
        <div key={data.id} className="sponsor_partner">
          <img src={data.img} alt={`sponsor logo ${data.id}`} />
        </div>
      ))}
    </div>
  );
};

export default Sponsor;
