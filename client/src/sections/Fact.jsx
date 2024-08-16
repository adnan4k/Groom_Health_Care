import React from 'react';
import { useState, useEffect } from 'react';

const useAnimatedNumber = (targetNumber, duration = 1000) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber, 10);
    const stepTime = duration / end;

    const intervalId = setInterval(() => {
      start += 1;
      setNumber(start);
      if (start === end) {
        clearInterval(intervalId);
      }
    }, stepTime);

    return () => clearInterval(intervalId);
  }, [targetNumber, duration]);

  return number;
};

function FactItem({ number, image, description }) {
  const animatedNumber = useAnimatedNumber(number);

  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 text-center">
        <img src={image} alt={description} className="w-12 h-12 mb-3 inline-block" />
        <h2 className="title-font font-medium text-3xl text-gray-500">{animatedNumber}</h2>
        <p className="leading-relaxed text-indigo-600">{description}</p>
      </div>
    </div>
  );
}

function Fact() {
  const facts = [
    { id: 1, number: '1200', image: '/images/mdi_patient.png', description: 'Patients' },
    { id: 2, number: '60', image: '/images/healthicons_doctor-male.png', description: 'Doctors' },
    { id: 3, number: '90', image: '/images/female-doctor.png', description: 'Nurses' },
    { id: 4, number: '200', image: '/images/free_man.png', description: 'Trainers' },
  ];

  return (
    <section className="text-gray-700 dark:bg-gray-700 body-font bg-white dark:bg-gray-900">
      <div className="container px-5 py-14 mx-auto">
      <h1 className='text-center font-bold text-4xl text-indigo-600 mb-10'>Facts</h1>

        <div className="flex flex-wrap -m-4 text-center">
          {facts.map(fact => (
            <FactItem key={fact.id} number={fact.number} image={fact.image} description={fact.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fact;
