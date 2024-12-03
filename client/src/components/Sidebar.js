import React from 'react';
import NavigationMenu from './NavigationMenu';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-50 transform ${ isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out bg-white dark:bg-gray-800`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-black dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div className="flex flex-col space-y-2 mt-4 p-4">
        <NavigationMenu toggleSidebar={toggleSidebar}/>
      </div>
    </div>
  );
};

export default Sidebar;