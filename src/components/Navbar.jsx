import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-2xl font-bold text-[var(--primary-color)]">FitLife</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer hover:text-[var(--primary-color)]">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-[var(--primary-color)]">
          <Link to="services" smooth={true} duration={500}>Services</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-[var(--primary-color)]">
          <Link to="classes" smooth={true} duration={500}>Classes</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-[var(--primary-color)]">
          <Link to="trainers" smooth={true} duration={500}>Trainers</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-[var(--primary-color)]">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="services" smooth={true} duration={500}>Services</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="classes" smooth={true} duration={500}>Classes</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="trainers" smooth={true} duration={500}>Trainers</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
