import { memo } from "react";

// functions
import { getRenderIcon } from "@/lib/getFunctions";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CardProps {
    logo: string | IconProp;
    name: string;
}

// hover:bg-sky-500

const Card = ({ logo, name }: CardProps) => {
    return (
        <div className="w-[210px] h-[210px] rounded transition duration-150 ease-in-out bg-white flex justify-center flex-col items-center hover:scale-105">
            {getRenderIcon(logo, name)}
            <div className="font-semibold text-lg">{name}</div>
        </div>
    );
}

export default memo(Card);
