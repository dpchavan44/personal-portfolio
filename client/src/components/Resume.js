import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Dattaprasad_Chavan_CV.pdf'; // Path to the PDF file in the public folder
    link.setAttribute('download', 'Dattaprasad_Chavan_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="">
      <button
       onClick={handleDownload}
       className="card border border-black inline-block dark:border rounded px-6 py-1 animate-border dark:hover:bg-blue-800 hover:bg-blue-300">
        Resume
        <FontAwesomeIcon icon={faDownload} className="ml-2" />
      </button>
    </div>
  );
};

export default Resume;