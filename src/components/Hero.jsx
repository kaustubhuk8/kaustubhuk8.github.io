// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import { prof, bwmap, worldmap } from "../assets";
// import { containerVariants, itemVariants } from "../utils/motion";

// const Hero = () => {
//   return (
//     <>
//       <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
//         <img
//           src={bwmap}
//           alt="world map"
//           className="w-full h-full sm:block hidden object-cover"
//         />
//       </div>
//       <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
//         <img
//           src={worldmap}
//           alt="world map"
//           className="w-full h-full sm:hidden block object-cover"
//         />
//       </div>
//       <section
//         className="relative flex sm:flex-row flex-col w-full h-screen mx-auto
//         sm:bg-hero bg-hero-mobile overflow-hidden"
//       >
//         <div
//           className={`absolute inset-0 sm:top-[250px] top-[150px]
//           lg:top-[150px] xl:top-[250px] ${styles.paddingX}
//           max-w-7xl mx-auto flex flex-row items-start
//           justify-between gap-3`}
//         >
//           <div className="flex flex-col justify-center items-center mt-5 ml-3">
//             <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
//             <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
//           </div>

//           <motion.div
//             variants={containerVariants()}
//             animate="visible"
//             initial="hidden"
//           >
//             <h1
//               className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
//             >
//               Hi, I'm{" "}
//               <motion.span
//                 variants={itemVariants()}
//                 animate="visible"
//                 className="sm:text-[#EF4044] sm:text-[90px]
//                 text-[#EF4044] text-[50px] font-mova
//                 font-extrabold uppercase"
//               >
//                 Kaustubh
//               </motion.span>
//             </h1>
//             <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
//               Experienced frontend developer with a passion for creating
//               visually stunning and user-friendly websites.
//             </p>
//           </motion.div>
//           <div
//             className="w-screen flex flex-col items-start
//             justify-center sm:-ml-[3rem] xxs:mt-4"
//           ></div>

//         <div>
//           <img
//             className="absolute rounded-full -right-20 animate-[imgFloat_7s_ease-in-out_infinite] md:top-20 w-[350px] h-[350px]"
//             src={prof}
//             alt="Kuk"
//           />
//         </div>
//         </div>

//       </section>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { prof, bwmap, worldmap } from "../assets";
import { containerVariants, itemVariants } from "../utils/motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Kaustubh'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  
  return (
    <section className="relative w-full h-screen">
      {/* Background Maps */}
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
      <div className="absolute inset-0 bg-gradient-to-bl from-black/90 to-black/90 transform" />
      </div>
      {/* Diagonal Overlay */}

      <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-full pt-20 sm:pt-0">
          {/* Text Content */}
          <motion.div
            className="w-full sm:w-1/2 space-y-6 text-center sm:text-left"
            variants={containerVariants()}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative Line (Mobile Only) */}
            <div className="flex flex-col items-center sm:hidden mb-8">
              <div className="w-5 h-5 rounded-full bg-[#0a0a0a]" />
              <div className="w-1 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
            </div>

            <motion.h1
              className={`${styles.heroHeadText} text-timberWolf font-poppins uppercase`}
              variants={itemVariants()}
            >
              Hi, I'm <br />
              <span className="text-[#EF4044] font-mova">{text}<Cursor/></span>
            </motion.h1>

            <motion.p
              className={`${styles.heroSubText} mt-2 text-timberWolf`}
              variants={itemVariants()}
            >
              Experienced Full-Stack Developer with a passion for creating
              visually stunning and user-friendly websites.
            </motion.p>
          </motion.div>

          {/* Profile Image */}
            <motion.div
              className="relative w-[320px] sm:w-[400px] rounded-full overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ef404480] via-transparent to-transparent blur-2xl" />
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <img
                  src={prof}
                  alt="Kaustubh"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
