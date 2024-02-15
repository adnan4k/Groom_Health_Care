import React from 'react'
import { useState} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Appointment() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        city: '',
        state: '',
        reason: '',
      });
    const {error,setError} = useState('')
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/user/create-appointment',formData)
            if(response.data.status === 200 || 201){
                alert('Appointment booked successfully!');
                navigate('/')
            }else{
            setError('please try again something went wrong')
            }
            
           } catch (error) {
            console.log(error)
           }
        console.log(formData);
      };
  return (
    <div>
        <NavBar />
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                  Appointment
          </h2>
          </div>
        <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
    <span>
      {error &&<p className='text-[#ff0000] inline-block  text-sm'>{error}</p>}
                </span>
        <form onSubmit={handleSubmit}>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input onChange={handleChange} type="text" name="name" id="name" placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input onChange={handleChange} type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input onChange={handleChange} type="email" name="email" id="email" placeholder="Enter your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input onChange={handleChange} type="date" name="date" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input onChange={handleChange} type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div class="mb-5 pt-3">
                <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Address Details
                </label>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <input onChange={handleChange} type="text" name="city" id="city" placeholder="Enter city"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                            <input onChange={handleChange} type="text" name="state" id="state" placeholder="Enter state"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            <div class="w-full px-3 ">
                        <div class="mb-5">
                        <label for="time" class="mb-3 block text-lg font-medium text-[#07074D]">
                            Reason
                        </label>
                           <textarea name="reason" id="reason" cols="30" rows="3" placeholder='write some reason of your appointment' value={formData.reason} onChange={handleChange}
                           className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'>
                           </textarea>
                        </div>
                    </div>    
            <div>
                <button
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
            
        </form>
    </div>
</div>
    </div>
  )
}

export default Appointment