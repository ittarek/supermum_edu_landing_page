import "./Courses.css";

// image
import image1 from "../../assets/images/school_work_image/Image1.png";
import image2 from "../../assets/images/school_work_image/Image2.png";
import image3 from "../../assets/images/school_work_image/Image3.png";
import { FaCartPlus, FaClock,  FaUsers } from "react-icons/fa";
import Container from "../ShareComponents/Container";

// courses data

const coursesData = [
  {
    id: 1,
    image: image1,
    title: "Hands-On Python & R In Data Science",
    total_student: "1,45,690",
    duration: "4 months",
  },
  {
    id: 2,
    image: image2,
    title: "Science and Machine Learning Bootcamp",
    total_student: "1,45,690",
    duration: "4 months",
  },
  {
    id: 3,
    image: image3,
    title: "The Python Mega Course:Real Applications",
    total_student: "1,45,690",
    duration: "4 months",
  },
];

const Courses = () => {
  return (
    <Container>
      <section id="courses_container">
        {/* course heading */}
        <div className="courses_heading">
          <h1>How our online public school works</h1>
          <button type="button">View all Courses</button>
        </div>

        {/* courses card */}
        <div className="course_data">
          {coursesData.map(({ id, image, title, total_student, duration }) => (
            <div key={id} className="course_card">
              {/* card image */}
              <div className="course_image">
                <img
                  src={image}
                  alt={`Image for ${title}`}
                  loading="lazy"
                />
              </div>
              <h3>{title}</h3>

              {/* card bottom */}
              <div className="card_bottom ">
                <div className="course_count">
                  <span>
                    <FaUsers />
                    <p>{total_student}</p>
                  </span>
                  <span>
                    <FaClock /> <p> {duration}</p>
                  </span>
                </div>

                <button type="button">
                  {" "}
                  <FaCartPlus />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Courses;
