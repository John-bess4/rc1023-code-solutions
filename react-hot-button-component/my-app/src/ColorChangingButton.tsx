import React from 'react';

interface ColorChangingButtonProps {
  count: number;
  onClick: () => void;
}

function ColorChangingButton({ count, onClick }: ColorChangingButtonProps) {
  const colors = ['purple', 'violet', 'pink', 'orange', 'yellow', 'white'];
  const backgroundColor =
    colors[Math.min(Math.floor(count / 3), colors.length - 1)];
  const textColor = count >= 12 ? 'black' : 'white';

  return (
    <button
      onClick={onClick}
      className={`color-changing-button`}
      style={{ backgroundColor, color: textColor }}>
      count is {count}
    </button>
  );
}

export default ColorChangingButton;
