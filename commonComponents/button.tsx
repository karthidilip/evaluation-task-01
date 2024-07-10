// components/Button.tsx
import React from 'react';


const buttonStyle: React.CSSProperties = {
    backgroundColor: '#0096FF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
}

const Button: React.FC = () => {
  return (
    <button style={buttonStyle}>Get Started</button>
  );
};



export default Button;
