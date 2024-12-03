import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconExternalLink = ({ url, icon, size = '3x', className = '' }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`icon-link ${className}`}>
      <FontAwesomeIcon icon={icon} className="text-2xl md:text-4xl" />
    </a>
  );
};

export default IconExternalLink;