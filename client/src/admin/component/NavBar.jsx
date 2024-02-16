import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const pathParts = window.location.pathname.split('/');
    pathParts.pop();
    const newPath = pathParts.join('/');

    navigate(newPath, { replace: true });
  };
  const location = useLocation();

  const getTitle = (pathname) => {
    const pathMap = {
      '/admin/staff/display': 'Staff',
      '/admin/news/display': ' News',
      '/admin/service/display': 'Service',
      '/admin/testimony/display': 'Testimony',
    };

    const pathSegments = pathname.split('/').filter(Boolean);
    while (pathSegments.length) {
      const currentPath = '/' + pathSegments.join('/');
      if (pathMap[currentPath]) {
        return pathMap[currentPath];
      }
      pathSegments.pop();
    }

    return 'Admin';
  };
  return (
    <div>
        <nav className="bg border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/product/view-product" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/logo.png" className="h-14" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Groom Health Care</span>
    </a>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
        
        </div>
        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       

        <h1 className="text-2xl">{getTitle(location.pathname)}</h1>
        <form  onSubmit={handleSubmit} className="text-center inline-block">
         {location.pathname==='/appointment-details' ? '':( <button className="bg-blue-600 text-white :ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg ml-60 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 outline-none ring-blue-800" >Add</button>)}
          </form>     
      </ul>
    </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBar