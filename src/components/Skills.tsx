import React from 'react';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaJsSquare, 
    FaNodeJs, 
    FaGit, 
    FaGithub 
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiC, SiCplusplus, SiPython, SiMysql, SiCoffeescript } from 'react-icons/si';

const skillIcons = [
    {icon: <FaHtml5 size="100%" />, label: "HTML"},
    {icon: <FaCss3Alt size="100%" />, label: "CSS"},
    {icon: <SiTailwindcss size="100%" />, label: "TailwindCSS"},
    {icon: <FaJsSquare size="100%" />, label: "JavaScript"},
    {icon: <FaReact size="100%" />, label: "ReactJS"},
    {icon: <SiNextdotjs size="100%" />, label: "NextJS"},
    {icon: <FaNodeJs size="100%" />, label: "NodeJS"},
    {icon: <FaGit size="100%" />, label: "Git"},
    {icon: <FaGithub size="100%" />, label: "GitHub"},
    {icon: <SiC size="100%" />, label: "C"},
    {icon: <SiCplusplus size="100%" />, label: "C++"},
    {icon: <SiPython size="100%" />, label: "Python"},
    {icon: <SiCoffeescript size="100%" />, label: "Java"},
    {icon: <SiMysql size="100%" />, label: "MySQL"},
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-t from-black to-[#381a5f] py-32">
        <div className="text-white w-[90%] max-w-[1200px] mx-auto p-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">Tech <span className='text-orange-400'>Skills</span></h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6">
                {skillIcons.map((skill, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col justify-center items-center bg-white/10 p-2 rounded-xl 
                                   h-[100px] w-[100px] 
                                   sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[180px]"
                    >
                        <div 
                            className="h-[60px] w-[60px] 
                                       sm:h-[100px] sm:w-[100px] 
                                       md:h-[120px] md:w-[120px] 
                                       flex justify-center items-center"
                        >
                            {skill.icon}
                        </div>
                        <p className="mt-2 text-xs sm:text-base md:text-lg">{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Skills;
