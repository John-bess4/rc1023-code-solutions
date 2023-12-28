import React from 'react';

type Props = {
  text: string;
  color: string;
};

export function CustomButton({ text, color }: Props) {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color,
    padding: '10px 15px',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={buttonStyle}>{text}</button>;
}
