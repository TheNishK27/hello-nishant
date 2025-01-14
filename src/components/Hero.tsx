"use client";
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png"
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,_#000,_#2B1942_35%,_#8F5C55_60%,_#DBAF6E_80%)]'>
        <div className="absolute rounded-full w-[4000px] h-[4000px] top-[550px] left-[50%] -translate-x-1/2 bg-custom-radial"></div>
        <div className="relative">
            <div className='font-bold text-center'>
                <h1 className="text-[#98B4CE] text-4xl md:text-7xl">Hi, I am</h1>
                <h1 className="text-orange-400 md:text-[#E48A57] text-5xl md:text-8xl font-semibold flex justify-center bubble-text">
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">N</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">i</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">s</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">h</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">a</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">n</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">t</span>
                    <span className="split-char">&nbsp;</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">K</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">u</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">m</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">a</span>
                    <span className="split-char transition-transform duration-500 hover:scale-110 hover:text-orange-500 hover:font-bold">r</span>
                </h1>
            </div>
            <motion.div 
            className="hidden md:block absolute left-[260px] top-[240px]" 
            drag>
                <Image src={cursor}
                height="170"
                width="170"
                alt="cursor"
                className=""
                draggable="false"/>
            </motion.div>

            <motion.div className="hidden md:block absolute right-[220px] top-[40px]" drag>
                <Image src={lightning}
                height="120"
                width="120"
                alt="cursor"
                className=""
                draggable="false"/>
            </motion.div>
        
        <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
            I am an Engineer focused on pioneering technological advancements through creative innovation.
        </p>
        <Image
        src={profilepic}
        alt="profile picture"
        className="w-[550px] md:h-auto md:w-auto md:mx-auto"
        />
        </div>
    </div>
  )
}

export default Hero 
