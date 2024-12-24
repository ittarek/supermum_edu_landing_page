import Banner from "../../Components/Banner/Banner";
import Courses from "../../Components/Courses/Courses";
import Lecture from "../../Components/Lecture/Lecture";
import Platform from "../../Components/Platform/Platform";
import Review from "../../Components/Review/Rivew";
import Sponsor from "../../Components/Sponsor/Sponssor";

const Home = () => {
  return (
  // all home components here . ex: banner, course.
<div>
      <Banner />
      <Sponsor/>
      <Platform/>
      <Courses/>
      <Lecture/>
      <Review/>
    </div>
  );
};

export default Home;
