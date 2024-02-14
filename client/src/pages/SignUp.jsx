import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
    password_confirmation: '', // Assuming you want to handle confirmation as well
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        if(formData.password  === formData.password_confirmation){
            console.log('good to go')
        }else{
            console.log('password do not match')
        }
    console.log(formData);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <Link to='/login' className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              login to your account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" type="text" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>
              <div className='mt-3'>
                <label htmlFor="role" className="block text-sm font-medium leading-5 text-gray-700">Role</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input id="role" name="role" value={formData.role} onChange={handleChange} placeholder="admin or customer" type="text" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="user@example.com" type="email" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input id="password" name="password" value={formData.password} onChange={handleChange} type="password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input id="password_confirmation" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} type="password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
              <button style={{backgroundColor:'#6A64F1'}} type='submit' className='bg-[#6A64F1]  w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'>Create account</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
