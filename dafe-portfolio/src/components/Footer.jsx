import React from 'react'

import { FaGithub, FaX, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full  py-[20px] bg-[#1a1a1a] text-center text-[#e1e1e2]">
      <p>Live, Love, Dream!</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/Odafe88" target="_blank" rel="noopener noreferrer" className="text-[#e1e1e2] hover:text-[#ffffff]">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/dafe-alaiya" target="_blank" rel="noopener noreferrer" className="text-[#e1e1e2] hover:text-[#ffffff]">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/DafeDaily" target="_blank" rel="noopener noreferrer" className="text-[#e1e1e2] hover:text-[#ffffff]">
          <FaX />
        </a>
      </div>
    </footer>
  )
}

export default Footer