import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MailboxAnimation = () => {
  return (
    <div className="flex items-start justify-center h-full">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-6xl animate-bounce" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default MailboxAnimation;