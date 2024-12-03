import React from 'react';
import CharacterTypingEffect from './CharacterTypingEffect';

const RenderTextWithDelay = ({ texts, typingSpeed = 100, delayBetweenTexts = 3000 }) => {
  const displayedText  = CharacterTypingEffect(texts, typingSpeed, delayBetweenTexts);
  return (
    <span className='inline-block text-black font-bold dark:text-white dark:bg-gradient-to-r dark:from-blue-100 dark:to-blue-400 dark:text-transparent dark:bg-clip-text'>
      {displayedText}
    </span>
  );
};

export default RenderTextWithDelay;