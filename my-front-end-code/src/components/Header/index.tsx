"use client"
import { memo, useState, useEffect } from "react";

// router
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 50); // Adjust this value to control when the header changes
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

        // Function to check if the link is active
    const isActive = (path: string) => {
        console.log("pathname ", pathname);
        console.log("path ", path);

        return pathname === path ? "activeHeaderLink" : ""; // Add active class
    };

    // text-sky-500 font-bold border-sky-500

    return (
        <div className={`w-full sticky top-0 z-50 py-3.5 transform transition-all duration-700 ease-in-out font-mono text-white 
         ${scrolled ? " bg-sky-500" : "bg-sky-500"}`}>
            <div className="container mx-auto flex justify-between items-center max-w-6xl px-3">
                <div className="flex">
                    <div className="animate__animated animate__fadeInDown h-[50px] w-[60px] rounded-lg border-4 text-center text-white font-bold border-white text-xl leading-[2]">
                        MAG
                    </div>
                </div>
                <div className="animate__animated animate__fadeInDown hidden md:flex space-x-4">
                    <Link
                        href="/home"
                        className={`text-lg hover:bg-sky-600 hover:rounded-lg py-1.5 px-2.5 ${isActive("/home")}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`text-lg hover:bg-sky-600 hover:rounded-lg py-1.5 px-2.5 ${isActive("/about")}`}
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className={`text-lg hover:bg-sky-600 hover:rounded-lg py-1.5 px-2.5 ${isActive("/projects")}`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/resume"
                        className={`text-lg hover:bg-sky-600 hover:rounded-lg py-1.5 px-2.5 ${isActive("/resume")}`}
                    >
                        Resume
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-2 mt-2 ml-3">
                        <Link href="/home" onClick={toggleMenu} className="text-lg">
                            Home
                        </Link>
                        <Link href="/about" onClick={toggleMenu} className="text-lg">
                            About
                        </Link>
                        <Link href="/projects" onClick={toggleMenu} className="text-lg">
                            Projects
                        </Link>
                        <Link href="/resume" onClick={toggleMenu} className="text-lg">
                            Resume
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(Header);