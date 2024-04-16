import React from 'react'
import { motion } from "framer-motion"
import { slideInFromLeft } from '@/utils/motion'
import { slideInFromRight } from '@/utils/motion'
import { slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] opacity-[0.9]"
                >
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hey There, I am
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Teja
                            {" "}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Pre Final Year Student from CBIT with project building experience in Full Stack Development, Machine Learning and Deep Learning. Check out my projects and Skiils
                </motion.p>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent