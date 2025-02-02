import React from 'react';
import { FaDumbbell, FaRunning, FaHeartbeat, FaUsers } from 'react-icons/fa';

const Services = () => {
  return (
    <div name="services" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[var(--primary-color)]">Services</p>
          <p className="py-6">Check out what we offer</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center items-center">
              <FaDumbbell size={50} className="text-[var(--primary-color)]" />
            </div>
            <p className="my-4">Personal Training</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center items-center">
              <FaRunning size={50} className="text-[var(--primary-color)]" />
            </div>
            <p className="my-4">Group Classes</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center items-center">
              <FaHeartbeat size={50} className="text-[var(--primary-color)]" />
            </div>
            <p className="my-4">Nutrition Planning</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center items-center">
              <FaUsers size={50} className="text-[var(--primary-color)]" />
            </div>
            <p className="my-4">Community Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
