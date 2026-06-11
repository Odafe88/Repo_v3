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
          <div className="text-[#333] w-full md:w-[60%]">
            <h1 className="
              text-[60px] md:text-[100px] 
              font-semibold text-[#e1e1e2]
            ">Dafe Alaiya</h1>
            <p className="text-[25px] md:text-[50px] text-[#7c9dd0]">Solutions Engineer</p>
            <p className="text-[20px] text-[#b0b0b1] md:text-[24px] mt-6 leading-relaxed">
              I bridge technical excellence and business outcomes. Architecting scalable solutions that solve complex problems, empower teams, and drive enterprise success.
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
