import { styles } from "../styles";
import { motion } from "framer-motion";
import { prof, bwmap, worldmap } from "../assets";
import { containerVariants, itemVariants } from "../utils/motion";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <motion.div
            variants={containerVariants()}
            animate="visible"
            initial="hidden"
          >
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <motion.span
                variants={itemVariants()}
                animate="visible"
                className="sm:text-[#EF4044] sm:text-[90px] 
                text-[#EF4044] text-[50px] font-mova
                font-extrabold uppercase"
              >
                Kaustubh
              </motion.span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Experienced frontend developer with a passion for creating
              visually stunning and user-friendly websites.
            </p>
          </motion.div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div>
          <img
            className="absolute right-20 rounded-full animate-[imgFloat_7s_ease-in-out_infinite] top-64 w-[380px] h-[380px]"
            src={prof}
            alt="Kuk"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
