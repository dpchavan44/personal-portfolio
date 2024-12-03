import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col">
      <div className='fixed top-0 left-0 w-full z-50'>
        <Header/>
      </div>
      <div className="pt-14 flex-grow bg-slate-100 dark:bg-gray-800 text-black dark:text-white relative">
        <Outlet />
      </div>
      {/*<Footer />*/}
    </div>
  );
}

export default App;