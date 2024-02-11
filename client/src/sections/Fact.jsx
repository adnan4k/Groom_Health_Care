import React from 'react';
import { useState, useEffect } from 'react';

const useAnimatedNumber = (targetNumber, duration = 1000) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    // Determine the total number of updates needed
    const end = parseInt(targetNumber, 10);
    // Calculate the increment per time interval for smooth animation
    const stepTime = duration / end;
    
    const intervalId = setInterval(() => {
      start += 1;
      setNumber(start);
      if (start === end) {
        clearInterval(intervalId);
      }
    }, stepTime);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetNumber, duration]);

  return number;
};
function FactItem({ number, description }) {
  const animatedNumber = useAnimatedNumber(number);

  return (
    <div className="flex flex-col items-center">
      <img src="/images/free_man.png" alt="Free Man" className="w-24 h-24 sm:-mt-[35%] object-cover" />
      <div className="text-center p-4 -mt-5 rounded-lg">
        <h2 className="font-bold text-xl md:text-3xl">{animatedNumber}</h2>
        <p className="text-md md:text-xl">{description}</p>
      </div>
    </div>
  );
}


function Fact() {
  const facts = [
    { id: 1, number: '1200+', description: 'Patients' },
    { id: 2, number: '300+', description: 'Surgeries' },
    { id: 3, number: '50+', description: 'Specialists' },
    { id: 4, number: '200+', description: 'Clinics' },
    { id: 5, number: '150+', description: 'Awards' },
  ];
  return (
    <div className="flex justify-center items-center mt-10 ml-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full max-w-6xl h-1/2 sm:mt-[10%] bg-[#75FFF833]">
        {facts.map(fact => (
          <FactItem key={fact.id} number={fact.number} description={fact.description} />
        ))}
      </div>
    </div>
  );
}

export default Fact;
