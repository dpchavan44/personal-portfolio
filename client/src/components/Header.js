import React, { useState } from 'react';
import Hamburger from './Hamburger';
import DarkLightButton from './DarkLightButton';
import NavigationMenu from './NavigationMenu';
import Sidebar from './Sidebar';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className=" bg-white dark:bg-gray-800 text-black dark:text-white py-1 border border-x-0 border-b-slate-300 dark:border-y-slate-500">
      <div className="md:hidden flex items-center justify-between w-full">
        <button onClick={toggleMenu} className="text-black dark:text-white">
          <Hamburger />
        </button>
        <h1 className="text-2xl font-bold ">Dattaprasad Chavan</h1>
        <DarkLightButton />
      </div>
      <div className="hidden md:flex md:justify-center">
          <div className={`hidden md:flex flex-row space-x-8`}>
            <NavigationMenu />
          </div>
          <div className="hidden md:flex pl-8">
            <DarkLightButton />
          </div>
      </div>
      <Sidebar isOpen={menuOpen} toggleSidebar={toggleMenu} /> {/*This sidebar is nly for small device,for large device we have header*/}
    </header>
  );
}

export default Header;