import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavigationMenu = ({ toggleSidebar }) => {
  const theme = useSelector((store) => store.configData.theme);
  const addCustomStyle = ({ isActive }) => {
    return {
      color: isActive ? (theme === 'dark' ? "SandyBrown" : "blue") : "",
      backgroundColor: isActive ? (theme === 'dark' ? "#434343" : "#f4f6f8") : "",
      borderRadius: "0.375rem", // Tailwind's rounded-md
      transition: "color 0.3s ease, background-color 0.3s ease", // Add transition for color and background-color
      padding: "0.25rem",
    };
  };
  return (
    <div className="flex flex-col w-full md:inline-block md:text-xl py-2">
      <NavLink to="home" rel="noopener noreferrer" style={addCustomStyle} className={`nav-link group font-medium transition-all`}>
        <span onClick={toggleSidebar} className="inline-block px-6">
          Home
        </span>
      </NavLink>
      <NavLink to="about" rel="noopener noreferrer" style={addCustomStyle} className="nav-link group  font-medium transition-all ">
        <span onClick={toggleSidebar} className="inline-block px-6">
          About
        </span>
      </NavLink>
      <NavLink to="projects" rel="noopener noreferrer" style={addCustomStyle} className="nav-link group  font-medium transition-all ">
        <span onClick={toggleSidebar} className="inline-block px-6 ">
          Projects
        </span>
      </NavLink>
      <NavLink to="experience" rel="noopener noreferrer" style={addCustomStyle} className="nav-link group  font-medium transition-all ">
        <span onClick={toggleSidebar} className="inline-block px-6">
          Experience
        </span>
      </NavLink>
      {/*<NavLink to="articles" rel="noopener noreferrer" style={addCustomStyle} className="nav-link group  font-medium transition-all ">
        <span onClick={toggleSidebar} className="inline-block px-6">
          Articles
        </span>
      </NavLink>*/}
      <NavLink to="contacts" rel="noopener noreferrer" style={addCustomStyle} className="nav-link group font-medium transition-all ">
        <span onClick={toggleSidebar} className="inline-block px-6">
          Contacts
        </span>
      </NavLink>
    </div>
  );
};

export default NavigationMenu