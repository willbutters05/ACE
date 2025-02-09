import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  delay = 3000,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    let timeoutId: number;

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 50);
      } else {
        setIsTyping(false);
        timeoutId = window.setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, delay);
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayText, currentTextIndex, isTyping, texts, delay]);

  return (
    <span className={`${className} inline-block min-h-[1.5em]`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;