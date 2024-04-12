import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../sections/Footer';

function Login() {
  const navigate = useNavigate()
  const [ error,setError] = useState('')
    const[formData,setFormData] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // console.log(formData)
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(formData,'in the submission')
                 try {

                    const response = await axios.post('http://localhost:4000/user/login',formData)
                  console.log("form submission response",response)
                  if(response.data.user.role === 'admin'){
                    navigate('/admin/news/display')
                  }else if(response.data.user.role === ''){
                    navigate('/appointment')
                  }
                  if(response.data.message === 'notfound' || response.status === 400){
                    setError('user not found');
                  } else if(response.data.message === 'invalidCredentials' || response.status === 400){
                    setError(' Invalid Credentials')

                  }else if(response.data.message ==='provide credential'){
                    setError('provide credentials')
                  }

                 
                  
                 } catch (error) {
                  setError(error.response.data.message)
                  console.log(error,'in the catch')
                 }
      };
  return (
    <div>
        <NavBar />
        <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
            Or
            <Link to='/signup'
                class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                create a new acccount
            </Link>
        </p>
    </div>


    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
                <div className='mt-4'>
                <span>
                  {error &&<p className='text-[#ff0000] inline-block  text-sm'>{error}</p>}
                </span>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Email address</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input onChange={handleChange} value={formData.email} id="email" name="email" placeholder="user@example.com" type="email" required=""  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="password" class="block text-sm font-medium leading-5 text-gray-700">Password</label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input onChange={handleChange} value={formData.password} id="password" name="password" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>
                   

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                    <button style={{backgroundColor:'#6A64F1'}} type='submit' className='bg-[#6A64F1]  w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'>Login</button>

          </span>
                </div>
            </form>
         
        </div>
    </div>
</div>
<Footer />
    </div>
  )
}

export default Login