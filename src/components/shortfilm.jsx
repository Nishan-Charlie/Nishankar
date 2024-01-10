import React ,{ useState }from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ShortFilm = () => {
    const [readMore, setReadMore] = useState(false);
  
    const toggleReadMore = () => {
      setReadMore(!readMore);
    };
  
    return (
      <>
        <div className="text-container mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <motion.div variants={textVariant()}>
                    <h2 className={styles.sectionHeadText}>Short Film 🎬🎥</h2>
                    <br />
                    
                    <p className={styles.sectionSubText}><span color= '#7744ff'font-weight= 'bold'>Description🍿:</span>
              {readMore ? (
                `This short film, created by Team 09, delves into the emotional and practical challenges encountered by first-year university students. It vividly portrays their transition to independence, the experience of homesickness, and the nostalgia for their hometown friends and family. The film empathetically captures the essence of yearning for home-cooked meals and the endeavor of adjusting to a new and unfamiliar environment, painting a relatable picture of student life away from home.`
              ) : (
                `This short film, created by Team 09, delves into the emotional and practical challenges...`
              )}
                        <button onClick={toggleReadMore} className="read-more-button">
                            {readMore ? 'Read Less' : 'Read More'}
                        </button>
                    </p>
                </motion.div>
            </div>
                <video src={require("./src/assets/shortFilm.mp4")} controls></video>
      </>
    );
  };
  
  export default SectionWrapper(ShortFilm, "shortfilms");