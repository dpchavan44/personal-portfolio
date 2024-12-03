// ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ChatApp from './ChatApp';
import DarkLightButton from './DarkLightButton';
// Import other project components here

const projectComponents = {
  chat: ChatApp,
  // Add other project components here
};
const headers = {
  chat: 'Chat with Llama',
  // Add other project headers here
};
const ProjectPage = () => {
  const { projectId } = useParams();
  const ProjectComponent = projectComponents[projectId];

  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="flex fixed justify-between text-center top-0 left-0 right-0 z-10 p-2 bg-white dark:bg-gray-800 shadow">
        <h1 className='text-black dark:text-white font-medium'>{headers[projectId]}</h1>
        <DarkLightButton />
      </div>
      <div className="flex-grow mt-16 overflow-auto">
        {ProjectComponent ? <ProjectComponent /> : <div>Project not found</div>}
      </div>
    </div>
  );
};

export default ProjectPage;