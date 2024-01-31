import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useState } from "react";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleHover = (technology) => {
    setHoveredTech(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 relative"
            key={technology.name}
            onMouseEnter={() => handleHover(technology)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />

            {hoveredTech === technology && (
              <div className="absolute bottom-0 top-24 whitespace-nowrap left-1/2 transform -translate-x-1/2 bg-lightblue p-2 rounded-md shadow-md">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
