import "./Lecture.css";
// image and video
import mainVideo from "../../assets/images/lecture_image/lectureImage.png";
import video1 from "../../assets/images/lecture_image/lecture1.png";
import video2 from "../../assets/images/lecture_image/lecture2.png";
import video3 from "../../assets/images/lecture_image/lecture3.png";
import Container from "../ShareComponents/Container";

const videoData = [
  {
    id: 1,
    video: video1,
    title: "Lecture 2",
  },
  {
    id: 2,
    video: video2,
    title: "Lecture 3",
  },
  {
    id: 3,
    video: video3,
    title: "Lecture 4",
  },
];
const Lecture = () => {
  return (
    <Container>
      <section id="lecture_container">
        {/* left side items */}
        <div className="left_side_items">
          <h1>Transform your life through education</h1>
          <p>
            Ariel Hocsman launched a new career in software development by
            taking courses on Besnik. What will you be able to do?
          </p>
          <button type="button">Get started </button>
        </div>

        {/* right side items */}
        <div className="right_side_items">
          <div className="main_video">
            <img src={mainVideo} alt="main video" />
          </div>

          {/* all videos */}
          <div className="lecture_video_div">
            {videoData.map(({ id, video, title }) => (
              <div key={id} className="lecture_video">
                <img src={video} alt={`${title} thumbnail`} loading="lazy" />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Lecture;
