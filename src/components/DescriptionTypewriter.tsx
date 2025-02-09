import React, { useState, useEffect } from 'react';

const DescriptionTypewriter: React.FC = () => {
  const text = "Elevate your business with cutting-edge automation solutions.";
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 30);
      return () => clearTimeout(timeoutId);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [displayText, isComplete]);

  return (
    <p className="mb-8 max-w-2xl text-base sm:text-lg text-gray-200/90 drop-shadow-lg px-4">
      {displayText}
      {!isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </p>
  );
};

export default DescriptionTypewriter;