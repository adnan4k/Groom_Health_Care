import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../layouts/Layout';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <Layout>
            <div className=' '>
                <nav className="bg-[#003456] border-gray-200 dark:bg-[#003456] ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="/images/groom-logo.png" className="h-16 " alt="groom logo" />
                        </a>
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu open state
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block text-white md:w-auto`} id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#003456] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#003456] dark:[#003456] md:dark:bg-[#003456] dark:border-gray-700">
                                <li className=''>
                                    <Link to='/' className={`block py-2 px-3 rounded md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 ${location.pathname === '/' ? ' text-blue-700' : 'text-white'}`} aria-current="page">Home</Link>
                                </li>
                                <li className=''>
                                    <a href='#about' className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 ${location.pathname === '/about' ? ' text-blue-700' : 'text-white'}`}>About</a>
                                </li>
                                <li className=''>
                                    <Link to='/service' className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 ${location.pathname === '/service' ? ' text-blue-700' : 'text-white'}`}>Services</Link>
                                </li>
                                {/* <li className=''>
                                    <Link to='/staff' className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 ${location.pathname === '/staff' ? ' text-blue-700' : 'text-white'}`}>Our Staff</Link>
                                </li> */}
                                <li className=''>
                                    <Link to='/contact' className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 ${location.pathname === '/contact' ? ' text-blue-700' : 'text-white'}`}>Contact</Link>
                                </li>
                                <li className='z-50'>
                                    <a href='#news'>
                                        <button className='bg-[#6A64F1] text-white text-sm mt-2 rounded-xl px-4 py-2 z-50 sm:-mt-2'>Blog</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </Layout>
    )
}

export default NavBar;
