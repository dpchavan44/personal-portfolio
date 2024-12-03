import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MailIcon = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-3xl mr-2" />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Contact Me</h2>
    </div>
  );
};

export default MailIcon;