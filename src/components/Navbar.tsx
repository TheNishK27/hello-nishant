"use client";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {motion} from 'framer-motion'

const navLinks = [
    { title: "About", path: "#about"},
    { title: "Resume", path: "https://drive.google.com/file/d/1-DrGXq2nr4P9n0Kby0YbyC9KVwvYC5-T/view?usp=sharing"},
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x:0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x:'-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

  return (
    <div className="text-white/70 pt-6">
    {/* Desktop Navbar */}
    <div className="hidden md:flex items-center justify-center px-4 py-2 mx-auto w-full">
        <ul className="flex flex-row space-x-8">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.path}>
                        <p>{link.title}</p>
                    </Link>
                </li>
            ))}

            <li>
                <a href="#contact" className="group">
                    <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contact me</h1>
                    <div className="relative">
                        <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                        <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-800 rounded-full group-hover:w-full"></div>
                    </div>
                </a>
            </li>
        </ul>
    </div>

    {/* Mobile Navbar */}
    <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border text-white/70 rounded border-white/70 p-2 z-50">
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
    </div>

    <motion.div
        initial={false}
        animate={nav ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full z-40 bg-black/90"
    >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.path} onClick={closeNav}>
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    </motion.div>
</div>

  )
}

export default Navbar
