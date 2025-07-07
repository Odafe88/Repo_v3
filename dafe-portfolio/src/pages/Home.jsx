"use client";
import { motion } from "framer-motion";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-[100vh] px-[30px] py-[15px] bg-[#121112] font-noto">
        <motion.div
          initial={{opacity: 0, y: 100}}
          animate={{
            opacity: 1,
            y: 0,
            transition:{duration:0.5}
          }}
          className="container min-h-screen md:h-[70vh] border-b border-[#333] py-[30px] mx-auto md:mt-[100px]"
        >
          <div className="text-[#333] w-full md:w-[50%]">
            <h1 className="
              text-[60px] md:text-[100px] 
              font-semibold text-[#e1e1e2]
            ">Dafe Alaiya</h1>
            <p className="text-[25px] md:text-[50px]">Creative Web and Mobile Developer.</p>
            <p className="text-[20px] text-[#e1e1e2] md:text-[30px]">
              I am a creative web and mobile developer with a passion for creating beautiful and functional user experiences.<br /> 
            </p>
          </div>
        </motion.div>   
      <About />
      <Projects />
      <Contact />
    </div>
  )
}



export default HomePage