import "./Pricing.css";
import Container from "./../ShareComponents/Container";

// data
const priceData = [
  {
    id: 1,
    course_type: "Regular",
    price: 65,
    course_details: [
      "1 Day Event",
      "1 Speaker",
      "Interaction Sessions ",
      "36 Classes",
    ],
  },
  {
    id: 2,
    course_type: "Medium",
    price: 95,
    course_details: [
      "1 Day Event",
      "1 Speaker",
      "Interaction Sessions ",
      "66 Classes",
    ],
  },
  {
    id: 3,
    course_type: "Premium",
    price: 445,
    course_details: [
      "1 Day Event",
      "1 Speaker",
      "Interaction Sessions ",
      "96 Classes",
    ],
  },
];
const Pricing = () => {
  return (
    <Container>
      <section id="pricing_container">
        {/* component heading  */}
        <div className="pricing_heading">
          <h1>Transform your life through education</h1>
          <button>Upgrade now</button>
        </div>

        {/* pricing details */}
        <div className="price_details_div">
          {priceData.map(({ id, course_type, price, course_details }) => (
            <div key={id} className={`price_card ${course_type.toLowerCase()}`}>
              <h1 className={`course_type ${course_type.toLocaleLowerCase()}`}>
                {course_type}
              </h1>
              <h2>
                <sup>$</sup>
                {price}
              </h2>
              <ul
                className={`course_details_li ${course_type.toLocaleLowerCase()}`}
              >
                {course_details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`plan_button ${course_type.toLocaleLowerCase()}`}
              >
                Buy Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Pricing;
