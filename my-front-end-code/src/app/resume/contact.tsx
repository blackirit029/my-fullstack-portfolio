"use client"
import { useState } from "react";

// icons
import {
    faEnvelope,
    faPhone,
    faLocationPin
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface contactFormat {
    icon: IconProp,
    contact: string,
};

interface contactLinkFormat {
    icon: IconProp,
    link: string,
    name: string,
};

const Contact = () => {
    const [showCopyDiv, setShowCopyDiv] = useState({ isShow: false, type: "" });

    const contact = {
        email: {
            icon: faEnvelope,
            contact: "markadrian.grandia@gmail.com"
        },
        phone: {
            icon: faPhone,
            contact: "(+63) 9264006727"
        },
        location: {
            icon: faLocationPin,
            contact: "Cebu, Philippines"
        }
    };

    const contactLink = {
        github: {
            icon: faGithub,
            link: "https://github.com/blackirit029",
            name: "Github",
        },
        linkedIn: {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/mark-adrian-grandia-82546b207/",
            name: "Linkedin",
        }
    };

    const handleOnClickCopyClipboard = (type: string, text: string) => {
        // to do implement copy clipboard
        navigator.clipboard.writeText(text);
        setShowCopyDiv({ isShow: true, type });

        setTimeout(() => {
            setShowCopyDiv({ isShow: false, type: "" });
        }, 3000);
    };

    const renderContactCard = (data: contactFormat, type: string) => {
        return (
            <button className="bg-white w-[300px] h-12 rounded-lg items-center flex pl-4 transition duration-150 ease-in-out hover:scale-105"
                onClick={() => handleOnClickCopyClipboard(type, data.contact)}>
                <FontAwesomeIcon icon={data.icon} className="w-4 h-4"/>
                <span className="ml-2 text-sm">{data.contact}</span>
            </button>
        );
    }

    const renderContactLinkCard = (data: contactLinkFormat) => {
        return (
            <a href={data.link} target="_blank" className="bg-white w-[300px] h-12 rounded-lg items-center flex pl-4 transition duration-150 ease-in-out hover:scale-105" rel="noreferrer">
                <FontAwesomeIcon icon={data.icon} className="w-4 h-4 mr-2"/>
                {data.name}
            </a>
        );
    }

    return (
        <>
            <h1 className="text-3xl">Contact</h1>
            <div className="mt-5 grid gap-4 lg:grid-cols-3 lg:grid-rows-1 md:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-3">
                {renderContactCard(contact.email, "email")}
                {renderContactCard(contact.phone, "phone")}
                {renderContactCard(contact.location, "location")}
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-2 grid-rows-1 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2">
                {renderContactLinkCard(contactLink.github)}
                {renderContactLinkCard(contactLink.linkedIn)}
            </div>
            <div className="transition-opacity ease-in duration-700 h-4 m-2">
                {showCopyDiv.isShow ? `My ${showCopyDiv.type} is copied to your clipboard!` : " " }
            </div>
        </>
    );
}

export default Contact;
