import { useState } from 'react';

interface ButtonProps {
  text: string;
  color: string;
}

function ToggleButton({ text, color }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  function handleToggleClick(): void {
    console.log(`Button ${text} clicked!`);
    setIsClicked(!isClicked);
  }

  return (
    <button
      style={{ backgroundColor: isClicked ? 'white' : color }}
      onClick={handleToggleClick}>
      {text}
    </button>
  );
}

export default ToggleButton;
