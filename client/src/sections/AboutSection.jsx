import React from 'react';

function AboutSection() {
  return (
    <section className="sm:flex items-center max-w-screen-xl mx-auto my-10">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Groom Health Care</span>
          </h2>
          <p className="text-gray-700">
            Groom Health service a Private limited company with proven
             experience of providing expertise solutions for every aspect of health and wellness...
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
