import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import IconExternalLink from './IconExternalLink';
import { useSelector } from 'react-redux';


const SocialMediaOptions = () => {
  const isDarkMode = useSelector((store) => store.configData.theme) === 'dark';
  return (
    <div className='flex flex-row space-x-4 md:space-x-6 my-4 md:my-6'>
        <IconExternalLink url="https://github.com/dpchavan44" icon={faGithub} className={isDarkMode ? 'text-blue-300' : 'text-black'} />
        <IconExternalLink url="https://www.linkedin.com/in/dattaprasad-chavan-6b9a6a153" icon={faLinkedin} className={isDarkMode ? 'text-blue-300' : 'text-black'} />
    </div>
  )
}

export default SocialMediaOptions