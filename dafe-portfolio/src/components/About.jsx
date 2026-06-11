"use client";
import { motion } from "framer-motion";
import React from 'react'

const About = () => {
  const expertise = [
    "Enterprise Architecture",
    "System Design",
    "API Development",
    "Cloud Infrastructure",
    "Database Optimization",
    "Technical Leadership",
    "DevOps & CI/CD",
    "Full-Stack Development",
    "Problem Solving"
  ];

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
                <p className="text-[#b0b0b1] text-[16px] md:text-[20px] mt-4 leading-relaxed">
                    As a Solutions Engineer, I transform complex technical challenges into elegant, scalable solutions. With a foundation in full-stack development and deep expertise in enterprise systems, I excel at understanding client needs and architecting systems that drive measurable business value.
                </p>
                <p className="text-[#b0b0b1] text-[16px] md:text-[20px] mt-6 leading-relaxed">
                    My approach combines technical depth with business acumen. I work across the entire stack—from infrastructure and backend systems to frontend interfaces—ensuring seamless integration and optimal performance. I thrive in collaborative environments, bridging the gap between technical teams and business stakeholders to deliver solutions that exceed expectations.
                </p>
                <p className="text-[#b0b0b1] text-[16px] md:text-[20px] mt-6 leading-relaxed">
                    I&apos;m passionate about leveraging cutting-edge technologies, from Web3 ecosystems to cloud-native architectures, to build the next generation of enterprise solutions.
                </p>
            </motion.div>
            <p className="text-[#e1e1e2] text-[24px] md:text-[30px] mt-10 font-semibold">Core Competencies</p>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {expertise.map((skill, index) => (
                        <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{
                            opacity: 1,
                            transition:{duration:0.5}
                        }}
                        viewport={{amount: 1}}
                        key={index} className="bg-[#1f1f20] border border-[#444] text-[#b0b0b1] text-center py-3 px-2 rounded-md hover:border-[#7c9dd0] hover:text-[#7c9dd0] transition-colors">
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
