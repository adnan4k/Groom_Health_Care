import React from 'react';

function Services() {
  // Array of service objects
  const services = [
    {
      image: "/images/child.png",
      title: "Patient and Family Assistance",
      description: "We provide home based palliative care by our well experienced nurses. We designed it to help people maintain their independence and quality of life while receiving the care they need. Which includes a wide range of activities."
    },
    {
      image: "/images/teacher.png",
      title: "Patient and Family Assistance",
      description: "We provide home based palliative care by our well experienced nurses. We designed it to help people maintain their independence and quality of life while receiving the care they need. Which includes a wide range of activities."
    },
    {
      image: "/images/research.png",
      title: "Patient and Family Assistance",
      description: "We provide home based palliative care by our well experienced nurses. We designed it to help people maintain their independence and quality of life while receiving the care they need. Which includes a wide range of activities."
    },
   
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-black text-3xl my-10 font-bold'>Our Services</h2>
      <div className='container flex flex-col sm:flex-row justify-center items-center'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col items-center justify-center m-5'>
            <img src={service.image} alt={service.title} className='rounded-sm' />
            <h3 className='items-center m-5 text-xl text-center font-semibold'>{service.title}</h3>
            <p className='text-center'>{service.description}</p>
          </div>
        ))}
      </div>
      <div className='m-10'>
        <img src="/images/dot.png" alt="dot" />
      </div>
    </div>
  );
}

export default Services;
