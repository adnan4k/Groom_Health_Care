import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#001E36] p-10 sm:p-16 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center mt-8 w-full">
      {/* Logo and tagline */}
      <div className="text-white flex flex-col items-center sm:items-start">
        <img src="/images/footer.png" className="mb-4" alt="logo of groom" />
        <h3 className="font-semibold text-lg text-center sm:text-left">
          Expertise Solutions for Health
        </h3>
      </div>

      {/* Important Links */}
      <ul className="text-white flex flex-col items-center sm:items-start">
        <li className="text-2xl font-medium mb-2">Important Links</li>
        <li className="text-[#04F9ED] font-medium text-lg mb-1 hover:text-white">
          <a href="/">Home</a>
        </li>
        <li className="text-[#04F9ED] font-medium text-lg mb-1 hover:text-white">
          <a href="#about">About us</a>
        </li>
        <li className="text-[#04F9ED] font-medium text-lg mb-1 hover:text-white">
          <a href="/service">Our Service</a>
        </li>
        <li className="text-[#04F9ED] font-medium text-lg mb-1 hover:text-white">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      {/* Socials */}
      <div className="text-white flex flex-col items-center sm:items-start">
        <h2 className="text-2xl mb-4">Follow Us</h2>
        <div className="flex items-center mb-4 hover:text-[#04F9ED]">
          <a href="https://www.facebook.com/profile.php?id=100071094020686&mibextid=ZbWKwL" className="flex items-center">
            <h2 className="text-xl font-semibold">Facebook</h2>
          </a>
        </div>
        <div className="flex items-center mb-4 hover:text-[#04F9ED]">
          <a href="/" className="flex items-center">
            <h2 className="text-xl font-semibold">Instagram</h2>
          </a>
        </div>
        <div className="flex items-center mb-4 hover:text-[#04F9ED]">
          <a href="https://t.me/+bSkp7e1AL305Njdk" className="flex items-center">
            <h2 className="text-xl font-semibold">Telegram</h2>
          </a>
        </div>
        <div className="flex items-center mb-4 hover:text-[#04F9ED]">
          <a href="mailto:grooming1st@gmail.com" className="flex items-center">
            <h2 className="text-xl font-semibold">Email</h2>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="col-span-1 sm:col-span-3 text-center mt-6 sm:mt-0">
        <span className="text-sm text-gray-500 font-semibold dark:text-gray-400">
          © 2023{" "}
          <a href="https://kasmasolution/" className="hover:underline">
            Kasma Tech Solution™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
