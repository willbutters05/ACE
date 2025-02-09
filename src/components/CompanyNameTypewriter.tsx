import React, { useState, useEffect } from 'react';

const CompanyNameTypewriter: React.FC = () => {
  const text = 'Web Design | AI | Automation';
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeoutId);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [displayText, isComplete]);

  return (
    <div className="relative">
      <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-lg sm:text-xl md:text-2xl font-semibold text-transparent">
        {displayText}
        {!isComplete && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    </div>
  );
};

export default CompanyNameTypewriter;