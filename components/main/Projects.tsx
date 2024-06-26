import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from 'framer-motion'
import Image from "next/image";
const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/gans.PNG"
                    title="Synthetic Radar Data Generation using Generative Adversarial Networks"
                    description="Implemented GANs to enhance radar signal classification, which
                    generated synthetic radar data to augment the training dataset.
                    "
                />
                <ProjectCard
                    src="/Neuralnexuswebsite.PNG"
                    title="Neural Nexus Community Website"
                    description="Developed a website for a Neural Nexus CBIT club, it is being used and accessed by 500+ people."
                />
                <ProjectCard
                    src="/NeuralChef.PNG"
                    title="Neural Chef - Competitive Coding Platform"
                    description="Designed and Developed a website where users can articipate in weekly
                    coding contests."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Personal Portfolio"
                    description="Made a personal portfolio website using Next.js and Three.js"
                />
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-center'>

                <div
                    className='text-[20px] text-white font-medium mt-[15px] text-center mb-[0px]'
                >
                    Check out my <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        Github
                        {" "}
                    </span> to see all of my projects and what I am working on
                </div>
            </div>
        </div>
    );
};

export default Projects;