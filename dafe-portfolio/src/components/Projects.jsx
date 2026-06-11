"use client";
import { motion } from "framer-motion";
import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: "Tradex",
            category: "FinTech Solution",
            excerpt: "Enterprise AI-powered trading platform integrating crypto and forex markets with real-time analytics",
            impact: "Automated trading workflows reducing execution time by 60%",
            live: "https://tradex-247-lime.vercel.app/",
            gh: "https://github.com/Odafe88/tradex_247/tree/dev",
            tools: "React, TypeScript, Supabase, Real-time APIs"
        },
        {
            name: "Prop Trust",
            category: "PropTech Platform",
            excerpt: "Comprehensive property verification and marketplace solution with decentralized verification",
            impact: "Streamlined property listings reducing verification time by 40%",
            live: "https://proptrust.vercel.app/",
            gh: "https://github.com/DafeDaily/proptrust",
            tools: "React, TypeScript, Redux, Supabase"
        },
        {
            name: "WayRance",
            category: "Blockchain Solution",
            excerpt: "Smart waste management system leveraging blockchain for transparent, incentivized waste tracking",
            impact: "Enhanced waste tracking with immutable on-chain records",
            live: "https://way-rance.vercel.app/",
            gh: "https://github.com/Odafe88/WayRance",
            tools: "React, Smart Contracts, Blockchain Integration"
        },
        {
            name: "EazyAsset",
            category: "Web3 Marketplace",
            excerpt: "Decentralized digital asset marketplace with secure ownership verification and trading",
            impact: "Enabled secure peer-to-peer asset transactions with full transparency",
            live: "https://asset-marketplace.vercel.app/",
            gh: "https://github.com/Odafe88/Asset-marketplace",
            tools: "React, Solidity, Web3.js, Smart Contracts"
        },
        
    ]
  return (
    <div id="projects"
        className="container border-b border-[#333] py-[30px] mx-auto md:mt-[100px]"
      >
        <div className="container py-[30px] mx-auto">
            <h2 className="text-[#fff] text-[50px] font-semibold">Solutions & Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {projects.map((project, index) => (
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{
                        opacity: 1,
                        transition:{duration:0.5}
                    }}
                    viewport={{amount: 1}}
                    key={index} className="flex flex-col justify-between bg-[#1f1f20] border border-[#444] p-6 rounded-lg hover:border-[#7c9dd0] transition-colors">
                        <div>
                            <p className="text-[#7c9dd0] text-sm font-semibold uppercase tracking-wider">{project.category}</p>
                            <h3 className="text-[#e1e1e2] text-[24px] md:text-[28px] font-semibold mt-2">{project.name}</h3>
                            <p className="text-[#b0b0b1] text-[16px] md:text-[18px] mt-3 leading-relaxed">{project.excerpt}</p>
                            <div className="mt-4 p-3 bg-[#121112] rounded border border-[#333]">
                                <p className="text-[#7c9dd0] text-sm font-medium">Impact</p>
                                <p className="text-[#b0b0b1] text-[14px] mt-1">{project.impact}</p>
                            </div>
                            <p className="text-[#666] text-[12px] mt-4">{project.tools}</p>
                        </div>
                        <div className="flex gap-3 mt-6 pt-4 border-t border-[#333]">
                            <button className="flex-1 bg-[#7c9dd0] hover:bg-[#5a7fa8] text-[#121112] px-4 py-2 rounded-md font-semibold text-sm transition-colors">
                                <a href={project.live} target="_blank" rel="noreferrer">View Live</a>
                            </button>
                            <button className="flex-1 border border-[#7c9dd0] text-[#7c9dd0] hover:bg-[#7c9dd0] hover:text-[#121112] px-4 py-2 rounded-md font-semibold text-sm transition-colors">
                                <a href={project.gh} target="_blank" rel="noreferrer">Code</a>
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
