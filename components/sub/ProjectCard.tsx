import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
                <button type="button" className="focus:outline-none text-white my-4 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <a href={link} className="mt-2 text-white">Demo</a></button>

            </div>
        </div>
    );
};

export default ProjectCard;