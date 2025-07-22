"use client"
import { useState, useEffect } from "react";

// page
import Contact from "./contact";
import Experience from "./experience";
import Education from "./education";

const Resume = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100); // Small delay to trigger the fade-in
        return () => clearTimeout(timer); // Cleanup timer
        }, []);

    return (
        <div className={`w-full h-full flex justify-center mt-12 font-mono flex-col items-center text-black
            transition-opacity duration-1000 ${isVisible ? " opacity-100 " : " opacity-0 "}`}>
            <Contact />
            <Experience />
            <Education />
        </div>
    );
};

export default Resume;
