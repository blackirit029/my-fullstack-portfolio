import { memo } from "react";

// icons
import {
    faReact,
    faJs,
    faHtml5,
    faCss,
    faGitAlt,
    faNodeJs,
    faVuejs,
} from "@fortawesome/free-brands-svg-icons";

// components
import Card from "@/components/Card";

const Skills = () => {
    const skills = [
        { logo: faReact, name: "React" },
        { logo: "redux", name: "Redux" },
        { logo: faJs, name: "Javascript" },
        { logo: faHtml5, name: "HTML" },
        { logo: faCss, name: "CSS" },
        { logo: "next", name: "Next.js" },
        { logo: "tailwind", name: "Tailwind" },
        { logo: faGitAlt, name: "Git" },
        { logo: "svn", name: "SVN" },
        { logo: faNodeJs, name: "Node" },
        { logo: faVuejs, name: "Vuejs"},
        { logo: "typescript", name: "Typescript" }
    ];

    return (
        <div className="animate__animated animate__fadeInDown animate__delay-200ms">
             <h1 className="text-center mt-14 md:text-4xl sm:text-3xl text-3xl">My Skills</h1>
            <div className="mt-7 grid gap-4 grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 sm:grid-cols-3 sm:grid-rows-4">
                {
                    skills.map((skill) => {
                        return <Card key={skill.name} logo={skill.logo} name={skill.name}/>
                    })
                }
            </div>
        </div>
    );
};

export default memo(Skills);
