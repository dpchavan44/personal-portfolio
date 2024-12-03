import { useState, useEffect } from 'react';

const CharacterTypingEffect = (texts, typingSpeed = 100, delayBetweenTexts = 3000) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
      if (charIndex < texts[currentIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[currentIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }, delayBetweenTexts);
        return () => clearTimeout(timeout);
      }
    }, [charIndex, currentIndex, texts, typingSpeed, delayBetweenTexts]);
  
    return displayedText;
};

export default CharacterTypingEffect;