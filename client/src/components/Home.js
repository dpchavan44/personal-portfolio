import React from 'react';
import RenderTextWithDelay from './RenderTextWithDelay';
import SocialMediaOptions from './SocialMediaOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from './Resume';
import { Link } from 'react-router-dom';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Skills from './Skills';


function Home() {
  const rotatingTexts = ["Backend Development", "System Design", "Data Structures & Algorithms","React JS"];

  return (
    <main className="md:flex md:flex-col items-center justify-start dark:bg-gray-800 text-black dark:text-white overflow-auto">
      <div className="md:flex md:w-2/3 md:flex-col md:justify-start md:items-start p-2 px-4 bg-slate-50 dark:bg-gray-800 min-h-screen lg:space-y-4">
        <h2 className="hidden md:inline-block text-4xl md:mt-4">
          Hi, I'm Dattaprasad Chavan, <span className='dark:bg-gradient-to-r dark:from-orange-300 dark:to-pink-800 dark:text-transparent dark:bg-clip-text'>Software Developer.</span>
        </h2>
        <p className="text-black dark:text-slate-300 text-xl md:text-2xl md:max-w-4xl break-words mt-4">
          With a strong focus on{" "}<br className='md:hidden'/>
          <RenderTextWithDelay
            texts={rotatingTexts}
            typingSpeed={100}
            delayBetweenTexts={3000}
          ></RenderTextWithDelay>
          .</p>
        <br />
        <p className='text-xl lg:max-w-4xl text-black dark:text-slate-300'>I have experience in designing and implementing scalable,
          high-performance applications. I enjoy working with various frameworks
          and databases to build robust systems. My goal is to leverage various
          technology to enhance user experiences and drive innovation.
        </p>
        <div className=''><SocialMediaOptions /></div>
        <div className="flex mt-4 space-x-3">
          <Resume />
          <Link
            to={`/contacts`}
            rel="noopener noreferrer"
            className="card dark:hover:bg-blue-800 hover:bg-blue-300 border border-black inline-block dark:border rounded px-6 py-1 animate-border"
          >
            Contact Me <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </div>
        <div className='text-center py-4 text-2xl font-medium'>My Skills</div>
        <Skills />
      </div>
      {/*<div className='hidden md:inline-block ml-12'>
        <img src={coderWithBinaryDigit} alt="Dattaprasad Chavan" className="rounded-full w-72 h-72"/>
      </div>*/}
    </main>
  );
}

export default Home;