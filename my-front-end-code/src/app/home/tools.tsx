"use client"
import { memo, useEffect, useRef } from "react";
// import AOS from "aos";

// icons
import {
    faNpm,
    faYarn,
} from "@fortawesome/free-brands-svg-icons";

// components
import Card from "@/components/Card";

const Tools = () => {
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

    const tools = [
        { logo: faNpm, name: "NPM" },
        { logo: faYarn, name: "Yarn" },
        { logo: "visualStudio", name: "Visual Studio" },
        { logo: "androidStudio", name: "Android Studio" },
        { logo: "xcode", name: "XCode" },
        { logo: "azure", name: "Azure" },
    ];

    return (
        <div ref={sectionRef} className="opacity-0 animate__delay-200ms">
            <h1 className="text-center mt-14 md:text-4xl sm:text-3xl text-3xl">Tools</h1>
            <div className="mt-7 grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-3 sm:grid-rows-2">
                {
                    tools.map((tool) => {
                        return <Card key={tool.name} logo={tool.logo} name={tool.name}/>
                    })
                }
            </div>
        </div>
    )
};

export default memo(Tools);
