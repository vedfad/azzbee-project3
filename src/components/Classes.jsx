import React from 'react';

const Classes = () => {
  const classes = [
    {
      name: 'CrossFit',
      time: '6:00 AM - 7:00 AM',
      trainer: 'John Doe',
      level: 'All Levels'
    },
    {
      name: 'Yoga',
      time: '8:00 AM - 9:00 AM',
      trainer: 'Jane Smith',
      level: 'Beginner'
    },
    {
      name: 'HIIT',
      time: '5:00 PM - 6:00 PM',
      trainer: 'Mike Johnson',
      level: 'Intermediate'
    },
    {
      name: 'Strength Training',
      time: '7:00 PM - 8:00 PM',
      trainer: 'Sarah Wilson',
      level: 'Advanced'
    }
  ];

  return (
    <div name="classes" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[var(--primary-color)]">Classes</p>
          <p className="py-6">Check out our class schedule</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {classes.map((classItem, index) => (
            <div key={index} className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-4">
              <h3 className="text-2xl font-bold text-[var(--primary-color)]">{classItem.name}</h3>
              <p className="py-2">Time: {classItem.time}</p>
              <p>Trainer: {classItem.trainer}</p>
              <p>Level: {classItem.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
