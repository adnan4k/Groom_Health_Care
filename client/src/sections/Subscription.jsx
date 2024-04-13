import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Subscription() {
    const [emailData, setEmailData] = useState({ email: '' });
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = async(e) =>{
    e.preventDefault();
        try {
            console.log(emailData)
            const response = await axios.post('http://localhost:4000/sub/create-sub', emailData);
            setEmailData({email:""})
            setMessage('You are subscribed successfully !')
            navigate('/')
               console.log(response.data)
        } catch (error) {
            console.log(error)
        }
  }
  const handleChange = (e) => {
    // Use the spread operator to merge the previous state with the updated value
    setEmailData((prevEmail) => ({
      ...prevEmail,
      email: e.target.value, // Assuming you're also updating other fields besides email
    }));
  };
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <div className="flex flex-col justify-center items-center">
        <span>
              {message && (
                <p className="text-sm text-green-400 justify-center items-center">
                  {message}
                </p>
              )}
            </span>
      <aside
        className="p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Subscribe to the Flowbite newsletter"
      >
        <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
          Get more updates...
        </h3>
        <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
          Stay up-to-date on our constantly evolving health service features and
          cutting-edge technologies
        </p>
        <form onSubmit={handleSubmit}>
          <div data-style="clean" className="flex items-end mb-3">
            <div
              data-element="fields"
              data-stacked="false"
              className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
            >
              <div className="relative w-full mr-3 formkit-field">
                <label
                  for="member_email"
                  className="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  id="member_email"
                  className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="email"
                  value={emailData.email}
                  aria-label="Email Address"
                  placeholder="Your email address..."
                  required=""
                  type="email"
                  onChange={handleChange}

                />
              </div>
              <span className="px-5 py-3 text-[16px] font-medium text-center text-white bg-[#0F8EF8] rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <button type="submit"> Subscribe</button>
              </span>
            </div>
          </div>
        </form>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Enter your e-mail address and subscribe to our newsletter .{" "}
          <a
            href="/"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Terms of Service
          </a>{" "}
          and
          <a
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="/"
          >
            Privacy Policy
          </a>
          .
        </div>
      </aside>
    </div>
  );
}

export default Subscription;
