import "./Platform.css"
// images
import platformImg from "../../assets/images/platform_image/userMain.png"
import people1 from "../../assets/images/platform_image/user2.png"
import people2 from "../../assets/images/platform_image/user3.png"
import people3 from "../../assets/images/platform_image/user4.png"
import people4 from "../../assets/images/platform_image/user5.png"
import circle from "../../assets/images/platform_image/circle.png"
// icons
import { FaVideo } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";
import { IoMdBook } from "react-icons/io";
import { TbSocial } from "react-icons/tb";
import Container from "../ShareComponents/Container"
const peopleImage = [
     {id:1, img: people1},
     {id:2, img: people2},
     {id:3, img: people3},
     {id:4, img: people4},
     
]
// card data
const platformCardData = [
  {
    id: 1,
    title: "Virtual learning",
    details:
      "The only costs are for standard school supplies and voluntary field trips.",
    icon: <><FaVideo/></>,
  },
  {
    id: 2,
    title: "Meaningful Education",
    details:
      "Many of our Connections Academy schools have additional accreditations.",
    icon: <><LuCalendarRange/></>,
  },
  {
    id: 3,
    title: "ONLINE CURRICULUM",
    details:
      "Our curriculum prepares students to go further in life by giving them support.",
    icon: <><IoMdBook/></>,
  },
  {
    id: 4,
    title: "SOCIAL INTERACTION",
    details:
      "Students at Connections Academy collaborate on projects together.",
    icon: <><TbSocial/></>,
  },
];
const Platform = () => {
     return (
       <Container>
         <div id="platform_container">
           {/*left side component  */}
           <div className="left_component">
             {/* image div */}
             <div className="image_div">
               <img src={platformImg} alt="platform image" />

               {/* people learning */}
               <div className="people_learning_component">
                 <div className="people_count">
                   <h3>56, 5470+</h3> <p>people are learning </p>
                 </div>
                 {/* people image */}
                 <div className="people_img">
                   {peopleImage.map((data, index) => (
                     <div
                       key={data.id}
                       className="image_stack"
                       style={{ "--index": index }}
                     >
             
                       <img
                         src={data.img}
                         alt="People are 
                       learning"
                         loading="lazy"
                       />
                     </div>
                   ))}{" "}
                   <button className="show_more_button">3+</button>
                   {/* circle */}
                   <div className="circle_image">
                     <img src={circle} alt="circle image"  loading="lazy"/>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* right side component */}
           <div className="right_side_component">
             <h1>How our online public school works </h1>
             <div className="platform_card">
               {platformCardData.map(data => (
                 <div key={data.id} className="platform_data">
                   <span>{data.icon}</span>
                   <h4>{data.title}</h4>
                   <p>{data.details}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </Container>
     );
};

export default Platform;