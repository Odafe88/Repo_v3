"use client"
import React from 'react'

import { FaGithub, FaX, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-[30px] bg-[#0f0f0f] text-center text-[#b0b0b1] border-t border-[#333]">
      <p className="text-sm mb-4">Building enterprise solutions with impact.</p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/Odafe88" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b1] hover:text-[#7c9dd0] transition-colors text-xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/dafe-alaiya" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b1] hover:text-[#7c9dd0] transition-colors text-xl">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/DafeDaily" target="_blank" rel="noopener noreferrer" className="text-[#b0b0b1] hover:text-[#7c9dd0] transition-colors text-xl">
          <FaX />
        </a>
      </div>
      <p className="text-xs text-[#666] mt-8">© 2024 Dafe Alaiya. All rights reserved.</p>
    </footer>
  )
}

export default Footer
