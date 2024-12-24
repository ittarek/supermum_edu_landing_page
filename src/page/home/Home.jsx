import Banner from "../../Components/Banner/Banner";
import Courses from "../../Components/Courses/Courses";
import Platform from "../../Components/Platform/Platform";
import Sponsor from "../../Components/Sponsor/Sponssor";

const Home = () => {
  return (
  // all home components here . ex: banner, course.
<div>
      <Banner />
      <Sponsor/>
      <Platform/>
      <Courses/>
    </div>
  );
};

export default Home;
