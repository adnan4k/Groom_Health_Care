import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-indigo-600 tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Serving your health needs is our priority 
          </h1>
         
          <Link to="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-gray-100 dark:text-white dark:border-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-gray-800">
            Make Appointment
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/trueDoctor.png" alt="doctor" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
