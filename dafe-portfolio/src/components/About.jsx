"use client";
import { motion } from "framer-motion";

import React from 'react'

const About = () => {
  return (
    <div id="about" className="container min-h-screen md:h-screen border-b border-[#333] py-[30px] mx-auto md:mt-[100px]">
        <div className="container py-[30px] mx-auto">
            <motion.h2 
            initial={{opacity: 0}}
            whileInView={{
                opacity: 1,
                transition:{duration:0.5}
            }}
            viewport={{amount: 1}}
            className="text-[#fff] text-[50px] font-semibold">About</motion.h2>
            <motion.div
            className="my-auto"
            initial={{opacity: 0}}
            whileInView={{
                opacity: 1,
                transition:{duration:0.5}
            }}
            viewport={{amount: 0.2}}
>
                <p className="text-[#e1e1e2] text-[16px] md:text-[20px] mt-4">
                    I am a passionate software developer with a strong background in building dynamic and responsive Fullstack web applications. With expertise in JavaScript, React, and other modern web technologies, I strive to create seamless user experiences and efficient, maintainable code. <br />My journey in software development has been driven by a love for problem-solving and continuous learning, always aiming to stay updated with the latest industry trends and best practices.
                </p>
                <p className="text-[#e1e1e2] text-[16px] md:text-[20px] mt-4">
                    I currently work in both Web2 and Web3 spaces as both a builder and community leader.<br />
                </p>
                <p className="text-[#e1e1e2] text-[16px] md:text-[20px] mt-4">
                    Onchain, I work with Solidity and Web3.js to build decentralized applications and smart contracts on the Base Network, I also fuction in the capcity of a community leader and Builder.
                </p>
            </motion.div>
            <p className="text-[#e1e1e2] text-[30px] mt-8 font-semibold">Below are some of the technologies and Langues I have experience using:</p>
            <div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {["React", "Node.Js", "ExpressJs", "POSTMAN", "Git", "Mongo DB", "Solidity", "Grunt", "Selenium"].map((skill, index) => (
                        <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{
                            opacity: 1,
                            transition:{duration:0.5}
                        }}
                        viewport={{amount: 1}}
                        key={index} className="bg-[#333] text-[#e1e1e2] text-center py-2 rounded-md">
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About