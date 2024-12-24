import "./Platform.css"
import platformImg from "../../assets/images/platform_image/userMain.png"
import people1 from "../../assets/images/platform_image/user2.png"
import people2 from "../../assets/images/platform_image/user3.png"
import people3 from "../../assets/images/platform_image/user4.png"
import people4 from "../../assets/images/platform_image/user5.png"
import circle from "../../assets/images/platform_image/circle.png"
const peopleImage = [
     {id:1, img: people1},
     {id:2, img: people2},
     {id:3, img: people3},
     {id:4, img: people4},
     
]
const Platform = () => {
     return (
       <div id="platform_container ">
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
                   <div key={data.id} className="image_stack" style={{ left: `${index * -15}px` }}>
                     <img src={data.img} alt="People are learning" />
                   </div>
                 ))}{" "}
                 <button className="show_more_button">3+</button>
                 {/* circle */}
                 <div className="circle_image">
                    <img src={circle} alt="circle image" />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
};

export default Platform;