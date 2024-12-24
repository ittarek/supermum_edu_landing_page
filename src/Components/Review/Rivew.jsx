import "./Review.css";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
// image
import image1 from "../../assets/images/testimonial_image/testimonial1.png";
import image2 from "../../assets/images/testimonial_image/testimonial2.png";

// data
const reviewData = [
  {
    id: 1,
    title: "Love mathematics because of Besnik Academy",
    details:
      "The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal.",
    reviewerName: "Wilson Thai",
    reviewerImg: image1,
    reviewerLocation: "Ontario, Canada",
    reviewCount: 5,
  },
  {
    id: 2,
    title: "There is so much to see and do all over world”",
    details:
      "The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal.",
    reviewerName: "Milena Belmar",
    reviewerImg: image2,
    reviewerLocation: "Argentina",
    reviewCount: 5,
  },
];
const Review = () => {
  return (
    <div id="review_component">
      {/* review heading  */}
      <div className="review_heading">
        <h1>Transform your life through education</h1>
        {/* slide button */}
        <div className="slide_button">
          <button type="button">
            <FaArrowLeftLong />
          </button>
          <button type="button">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* review items */}
      <div className="review_items">
        {reviewData.map(data => (
          <div key={data.id} className="review_card">
            <h2>&quot;{data.title}&quot;</h2>
            <p>&quot;{data.details}&quot;</p>

            {/* reviewer profile details*/}
            <div className="reviewer_card">
              {/* profile image
               */}
              <div className="reviewer_image">
                <img src={data.reviewerImg} alt="" />
              </div>

              <div className="reviewer_data">
                <h2>{data.reviewerName}</h2>
                <p>{data.reviewerLocation}</p>
                <span>
                  {Array(data.reviewCount)
                    .fill()
                    .map((_, index) => (
                      <FaStar key={index} />
                    ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
