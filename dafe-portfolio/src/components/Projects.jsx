"use client";
import { motion } from "framer-motion";
import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: "GraphBlog",
            excerpt: "A blog site to upload and read stories in real time",
            live: "http://graph-blog-weld.vercel.app/",
            gh: "https://github.com/Odafe88/graph-blog",
            tools: "Next.Js, Tailwindcss, graphql, graphCMS"
        },
        {
            name: "King's CLothing",
            excerpt: "An e-commerce site",
            live: "http://crwn-clothing-odafe88.vercel.app/",
            gh: "https://github.com/Odafe88/crwn-clothing",
            tools: "React, Sass, Redux, React Router"
        },
        {
            name: "WayRance",
            excerpt: "A Waste Management solution built on the toronet blockchain",
            live: "https://way-rance.vercel.app/",
            gh: "https://github.com/Odafe88/WayRance",
            tools: "ReactJS, TailwindCSS, Solidity, Wagmi"
        },
        {
            name: "EazyAsset",
            excerpt: "A Digital asset manager and marketplace Built on the Celo BlockChain",
            live: "https://asset-marketplace.vercel.app/",
            gh: "https://github.com/Odafe88/Asset-marketplace",
            tools: "ReactJS, TailwindCSS, Solidity, Wagmi"
        },
        
    ]
  return (
    <div id="projects"
        className="container min-h-screen md:h-[70vh] border-b border-[#333] py-[30px] mx-auto md:mt-[100px]"
      >
        <div className="container py-[30px] mx-auto">
            <h2 className="text-[#fff] text-[50px] font-semibold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4">
                {projects.map((project, index) => (
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{
                        opacity: 1,
                        transition:{duration:0.5}
                    }}
                    viewport={{amount: 1}}
                    key={index} className="flex flex-col justify-between bg-[#333] p-4 rounded-lg">
                        <div>
                            <h3 className="text-[#e1e1e2] text-[25px] md:text-[30px] font-semibold">{project.name}</h3>
                            <p className="text-[#e1e1e2] text-[16px] md:text-[20px]">{project.excerpt}</p>
                        </div>
                        <div className="flex justify-between mt-4 bottom-0">
                            <button className="bg-[#e1e1e2] hover:bg-[#3333] p-2 rounded-md">
                                <a href={project.live} target="_blank" rel="noreferrer" className=" text-[#121112] text-[16px] md:text-[20px]">Live</a>
                            </button>
                            <button className="bg-[#e1e1e2] hover:bg-[#333] p-2 rounded-md">
                                <a href={project.gh} target="_blank" rel="noreferrer" className=" text-[#121112] text-[16px] md:text-[20px]">Github</a>
                            </button>
                        </div>
                    </motion.div>
                ))}
                
            </div>
        </div>
      </div>
  )
}

export default Projects