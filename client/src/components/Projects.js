import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const projects = [
    {
      name: "Ask me anything",
      description: "Talk with Llama model and ask questions.",
      path: "/projects/chat",
      ai: true,
      clone : false
    },
    {
      name: "Netflix Clone",
      description:
        "A streamlined video streaming platform that allows users to browse, search, and watch movies and TV shows.",
      path: "https://netflix-clone-e677b.web.app/",
      ai: false,
      clone : true
    },
    {
      name: "Youtube Clone",
      description: "A simple video-sharing platform that lets users Search, Watch, and interact with videos and shorts.",
      path: "https://youtube-clone-y842.onrender.com",
      ai: false,
      clone : true
    },
    // Add other projects here
  ];
  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'AI' && project.ai) return true;
    if (filter === 'Clone' && project.clone) return true;
    return false;
  });
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-2 md:p-4">
      <div className="w-full md:w-10/12">
        <div className="flex justify-center mb-2 md:mb-4">
          <button onClick={() => setFilter('All')} className={`px-2 md:px-8 py-1 md:py-2 mx-1 rounded-lg font-bold ${filter === 'All' ? 'bg-blue-800 text-white' : 'bg-gray-500'}`}>All</button>
          <button onClick={() => setFilter('AI')} className={`px-2 md:px-8 py-1 md:py-2 mx-1 rounded-lg font-bold ${filter === 'AI' ? 'bg-blue-800 text-white' : 'bg-gray-500'}`}>AI✨</button>
          <button onClick={() => setFilter('Clone')} className={`px-2 md:px-8 py-1 md:py-2 mx-1 rounded-lg font-bold ${filter === 'Clone' ? 'bg-blue-800 text-white' : 'bg-gray-500'}`}>Clone</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.path}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white dark:bg-gray-800 dark:text-slate-300 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-white relative card animate-border"
            >
              <div className='font-medium m-1 font card-content'>
                <h1 className='text-1xl md:text-2xl'>{project.name}</h1>
                {project?.description}
              </div>
              <div className="mt-4 text-right card-content">
                 <h1 className='font-bold hover:to-blue-500 text-blue-700'>Try <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h1>
              </div>
              <div className="absolute inset-0 border-animated opacity-0 hover:opacity-100"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;