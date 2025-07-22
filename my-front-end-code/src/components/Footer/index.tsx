"use client"
import { memo, useState, useEffect, useRef } from "react";

// icons
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const [showCopyDiv, setShowCopyDiv] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
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
    

    const handleOnClick = () => {
        navigator.clipboard.writeText("markadrian.grandia@gmail.com");
        setShowCopyDiv(true);

        setTimeout(() => {
            setShowCopyDiv(false);
        }, 3000);
    }

    return (
        <div ref={sectionRef} className="h-52 opacity-0 animate__delay-200ms flex justify-center items-center flex-col">
            <div className="text-xl font-medium text-black">Looking forward to collaborating with you!</div>
            <button className="mt-4 rounded bg-sky-500 py-1 px-20 text-lg text-white" onClick={handleOnClick}>
                Email me <FontAwesomeIcon icon={faArrowRight} className="h-3 w-7"/>
            </button>
            <div className="transition-opacity ease-in duration-700 h-4 m-2">
                {showCopyDiv ? "My email is copied to your clipboard!" : " " }
            </div>
        </div>
    );
}

export default memo(Footer);
