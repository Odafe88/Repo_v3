import React from 'react';
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';


const Header = () => {
    return (
        <header className="sticky t-0 l-0 r-0 bg-[#121112] px-[30px] py-[15px]">
            <div className="container py-[1.5rem] w-full mx-auto flex justify-between items-center border-b border-[#333]">
                <h1 className="font-noto text-[#e1e1e2] text-2xl font-bold">Dafe.</h1>
                <Link href="https://github.com/Odafe88"><FaGithub className="text-[#e1e1e2] text-2xl" /></Link>
            </div>
        </header>
    );
};

export default Header;