"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import coincrush from "../assets/project.png";
import spotify_clone from "../assets/proj1.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Spotify Clone",
    desc: "Designed a responsive web application replicating key features of Spotify using modern web development tools and technologies. Leveraged ReactJS for building reusable UI components and managed application state efficiently. Styled the interface using TailwindCSS to achieve a sleek and modern design.",
    devStack: "React.js and TailwindCSS",
    link: "https://spotify-clone-nishants-projects-8de805ce.vercel.app/",
    git: "https://github.com/TheNishK27/Spotify-Clone/tree/main",
    src: spotify_clone,
  },
  {
    title: "CoinCrush",
    desc: "Developed CoinCrush, a cryptocurrency dashboard using React.js and CoinGecko API for real-time market data. Integrated interactive charts powered by Google Charts to display trends, historical data, and price movements. The application is optimized for consistent performance and responsiveness.",
    devStack: "React.js and CoinGecko API",
    link: "https://coin-crush.vercel.app/",
    git: "https://github.com/TheNishK27/CoinCrush",
    src: coincrush,
  },
  {
    title: "Personal Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veniam saepe odit consectetur illum cumque tempora a voluptas architecto culpa soluta, aut ipsum ut enim blanditiis deserunt libero aliquam undNeque, quos rerum eveniet modi dolore voluptatem repudiandae. Tenetur sapiente veniam",
    devStack: "React.js, Next.js, TailwindCSS and Framer Motion",
    link: "#",
    git: "#",
    src: portfolio,
  },
];

const Projects = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="project">
      <h1 className="text-white text-5xl md:text-6xl text-center mx-auto font-semibold ">
        Selected<span className="text-orange-400"> Projects</span>
      </h1>

      <div className="px-6 md:px-0 md:max-w-[1000px] mx-auto mt-32 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1
                ? "md:flex-row-reverse gap-12"
                : "flex-col md:flex-row gap-12"
            }`}
          >
            <div className="space-y-4 md:max-w-[550px]">
              <h2 className="text-5xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <div className="flex justify-center items-center">
                <p className="text-xl text-orange-400 font-semibold">
                  {project.devStack}
                </p>
              </div>
              <div className="w-full h-[1px] bg-gray-400 my-4"></div>
              <div className="flex justify-evenly items-center">
                <a
                  href={project.link}
                  className="px-4 py-2 text-white rounded border"
                >
                  Link
                </a>
                <a
                  href={project.git}
                  className="px-4 py-2 text-white rounded border"
                >
                  Git
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
  <Image
    src={project.src}
    alt={project.title}
    className="object-cover border rounded border-gray-700 
               w-full h-[200px] md:w-[500px] md:h-[350px]"
  />
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
