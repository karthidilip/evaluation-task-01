// components/DownloadButton.tsx
import React from 'react';

const DownloadButton: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
     margin: '4px 2px',
    
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '#0088cc',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Download Your Free Theme
    </button>
  );
};

export default DownloadButton;
