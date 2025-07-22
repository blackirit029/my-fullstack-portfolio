"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// images
import {
    bikePov,
    desktopDisplay
} from "@/assets/images/manageIconImg";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                // Stop observing after animation triggers once
                observer.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
        observer.observe(currentRef);
        }

        // Clean up
        return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100); // Small delay to trigger the fade-in
        return () => clearTimeout(timer); // Cleanup timer
        }, []);

    const renderRightImgAbout = () => {
        return (
            <div className="animate__animated animate__fadeInDown animate__delay-100ms rounded-l-lg mt-12 h-[424px] flex md:w-[70%] md:flex-row sm:w-[90%] sm:flex-col w-[90%] flex-col text-black bg-white">
                <div className="h-[100%] md:w-[55%] sm:w-full w-full p-5">
                I have been working as a Front-End Developer for 7 years, crafting engaging user interfaces. My expertise lies in building efficient and responsive web and mobile applications. I specialize in React, delivering seamless experiences across platforms.
                <br/><br/>Over the years, I’ve gained hands-on experience in both web and mobile development. This has honed my skills in creating intuitive designs and maintaining performance. My focus has always been on bridging design and functionality effectively.
                <br/><br/>Looking ahead, I aspire to expand my expertise and become a Full-Stack Developer. I’m eager to explore backend technologies to build complete, end-to-end solutions.
                </div>
                <div className="h-full w-full md:w-[45%] sm:w-full">
                    <Image src={desktopDisplay} alt="desktopDisplay" height={424} className="h-full w-full rounded-r-lg" />
                </div>
            </div>
        );
    }

    const renderLeftImgAbout = () => {
        return (
            <div ref={sectionRef} className="opacity-0 animate__delay-200ms mt-16 h-[424px] flex md:w-[70%] md:flex-row sm:w-[90%] sm:flex-col w-[90%] flex-col text-black bg-white rounded-r-lg">
                <Image src={bikePov} alt="desktopDisplay" height={424} className="h-full w-full rounded-l-lg md:w-[45%] sm:w-full" />
                <div className="h-[100%] md:w-[55%] sm:w-full w-full p-5">
                    I have a deep passion for traveling, especially on my motorcycle, as it allows me to explore with freedom and adventure. Riding has taken me to breathtaking destinations across the Philippines, each with its own unique charm.
                    <br/><br/>From winding mountain roads to serene coastal highways, I’ve experienced the beauty of the country up close. Every journey has been an opportunity to discover new cultures, meet amazing people, and embrace the thrill of the open road.
                    <br/><br/>Traveling on two wheels isn’t just a hobby for me—it’s a way of life that fuels my curiosity and love for adventure.
                </div>
            </div>
        );
    }

    return (
        <div className={`w-full h-full flex justify-center mt-12 font-mono flex-col items-center
            transition-opacity duration-1000 ${isVisible ? " opacity-100 " : " opacity-0 "}`}>
            <h1 className="animate__animated animate__fadeInDown animate__delay-100ms text-4xl text-black">About</h1>
            {renderRightImgAbout()}
            {renderLeftImgAbout()}
        </div>
    );
}

export default About;