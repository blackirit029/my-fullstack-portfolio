interface experienceFormat {
    company: string,
    position: string,
    year: string,
    jobDescription: string[],
};

const Experience = () => {
    const experience = [
        {
            company: "Accenture",
            position: "Advanced App Engineering Sr. Analyst",
            year: "November 2023 - PRESENT",
            jobDescription: [
                "Optimize project management, resulting in timely deliverables and improved client satisfaction rates.",
                "Attend stand-up daily meetings.",
                "Update old code bases to modern development standards, improving functionality.",
                "Fixing bugs and adding new features.",
                "Manage the ticket assigned showing the current status when it will be done and other details like RCA etc."
            ],
        },
        {
            company: "Primover Consultancy Services, Inc.",
            position: "Software Developer",
            year: "May 2022 - November 2023",
            jobDescription: [
                "Investigating the to-be-added feature or to-be-fix bug.",
                "Do the bug fixing in the added feature or any bug that was found during the testing.",
                "Create the Design Document on how to approach the bug or new feature.",
                "Implement the design approach.",
                "Do the UTE after the coding.",
                "Create a release request ticket if done with the testing and coding.",
            ],
        },
        {
            company: "Gomigu",
            position: "Software Engineer",
            year: "March 2018 - March 2022",
            jobDescription: [
                "Implement the given UX Design unto Frontend for both Web and Mobile.",
                "Add new to the existing or newly created project.",
                "Fixing bugs that were found by the tester to the added feature and the possibility that it affected other features.",
                "Report to the scrum master in daily meetings about the progress.",
                "Assigned in both Web and Mobile development.",
            ],
        },
        {
            company: "Zoog Technologies Inc.",
            position: "Software Engineer",
            year: "July 2017 - March 2018",
            jobDescription: [
                "Implement the given UX Design unto Frontend for both Web and Mobile",
                "Add new to the existing or newly created project.",
                "Fixing bugs that were found by the tester to the added feature and the possibility that it affected other features.",
                "Report to the scrum master in daily meetings about the progress.",
                "Assigned in both Web and Mobile development.",
            ],
        }
    ];

    const renderJobDescription = (jobData: string, index: number) => {
        return (
            <li key={index} className="">{jobData}</li>
        );
    }

    const renderJobExperience = (experienceData: experienceFormat, indx: number) => {
        const { position, year, company, jobDescription } = experienceData;

        return (
            <div key={indx} className="w-[100%] bg-white p-5 mb-5 rounded-lg">
                <div className="flex lg:justify-between lg:mb-0 md:justify-between md:mb-0 sm:justify-between sm:mb-0 flex-col mb-3">
                    <div className="text-xl text-sky-500 lg:mb-0 md:mb-0 sm:mb-0 mb-3">{position}</div>
                    <div className="text-xl">{year}</div>
                </div>
                <div className="text-lg">{company}</div>
                <ul className="list-disc pl-10">
                    {jobDescription.map((jobData, index) => {
                        return renderJobDescription(jobData, index);
                    })}
                </ul>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-3xl mt-10">Experience</h1>
            <div className="mt-6 lg:w-[75%] md:w-[85%] sm:w-[90%] w-[90%]">
                {experience.map((experienceData, index) => {
                    return renderJobExperience(experienceData, index);
                })}
            </div>
        </>
    );
}

export default Experience;
