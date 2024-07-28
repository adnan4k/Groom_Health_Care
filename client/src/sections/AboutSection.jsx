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
          Groom Health Service is a leading company in the healthcare industry, 
          offering up to date support and expertise to improve healthcare access,
           address health issues, and enhance the overall quality of medical care..
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
