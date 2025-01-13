import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" text-white/70">
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Nishant Kumar</h1>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/nishantkumar27" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/GeekNeesh?t=rWG4bSg9aJckMmph2Ix7fA&s=09" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/thenisk27?igsh=bTFiMnR5dXpjdGJ3" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-8">
        <p className="text-center md:text-left mt-4">© 2025 Nishant Kumar. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
