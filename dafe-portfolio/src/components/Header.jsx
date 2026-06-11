import React from 'react';
import { FaGithub, FaDownload } from "react-icons/fa6";
import Link from 'next/link';


const Header = () => {
    return (
        <header className="sticky t-0 l-0 r-0 bg-[#121112] px-[30px] py-[15px] border-b border-[#333]">
            <div className="container py-[1.5rem] w-full mx-auto flex justify-between items-center">
                <h1 className="font-noto text-[#7c9dd0] text-2xl font-bold">Dafe</h1>
                <div className="flex items-center gap-6">
                    <a 
                        href="/resume.pdf" 
                        download 
                        className="flex items-center gap-2 text-[#b0b0b1] hover:text-[#7c9dd0] transition-colors text-sm font-medium"
                    >
                        <FaDownload className="text-lg" />
                        <span>Resume</span>
                    </a>
                    <Link href="https://github.com/Odafe88"><FaGithub className="text-[#b0b0b1] hover:text-[#7c9dd0] transition-colors text-xl" /></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
