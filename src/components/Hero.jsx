import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[url('/gym-hero.jpg')] bg-cover bg-center">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full hero-gradient">
        <p className="text-[var(--primary-color)]">WELCOME TO FITLIFE</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Transform Your Body
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Transform Your Life
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
          Join our state-of-the-art facility and start your fitness journey today.
          Expert trainers, modern equipment, and a supportive community await you.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)]">
            <Link to="contact" smooth={true} duration={500}>Join Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
