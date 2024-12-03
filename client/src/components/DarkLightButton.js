import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeMode } from '../store/configData';
import DarkModeIcon from './DarkModeIcon';
import LightModeIcon from './LightModeIcon';

const DarkLightButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.configData.theme);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const handleToggleDarkMode = () => {
    dispatch(toggleThemeMode());
  };
  return (
    <button onClick={handleToggleDarkMode} className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white m-2 px-2 py-1.5 rounded-full">
      {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default DarkLightButton