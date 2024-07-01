import React, { useState } from 'react';

const CollapsibleText = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (text.length <= maxLength || isExpanded) {
      return text;
    }
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <div className="text-center font-semibold text-sm tracking-tight leading-4">
      <p className="text-gray-900">{renderText()}</p>
      {text.length > maxLength && (
        <button onClick={toggleExpansion} className="text-rose-800 mt-1">
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default CollapsibleText;
