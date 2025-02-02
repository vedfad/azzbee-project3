import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'John Doe',
      specialty: 'CrossFit Expert',
      experience: '10+ years',
      image: '/trainer1.jpg'
    },
    {
      name: 'Jane Smith',
      specialty: 'Yoga Instructor',
      experience: '8+ years',
      image: '/trainer2.jpg'
    },
    {
      name: 'Mike Johnson',
      specialty: 'HIIT Specialist',
      experience: '5+ years',
      image: '/trainer3.jpg'
    }
  ];

  return (
    <div name="trainers" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[var(--primary-color)]">Our Trainers</p>
          <p className="py-6">Meet our expert training team</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trainers.map((trainer, index) => (
            <div key={index} className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
              <img src={trainer.image} alt={trainer.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{trainer.name}</h3>
                <p className="text-[var(--primary-color)]">{trainer.specialty}</p>
                <p>Experience: {trainer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
