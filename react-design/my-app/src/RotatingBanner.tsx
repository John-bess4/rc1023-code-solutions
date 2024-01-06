import { useState } from 'react';

interface RotatingBannerProps {
  items: string[];
}

export function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick(): void {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrevClick(): void {
    const nextIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handleSelect(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <>
      {/* Render the Banner component and pass the current item (based on currentIndex) as a prop */}
      <Banner word={items[currentIndex]} />
      <div>
        {/* Render the Prev component and pass the handlePrevClick function as a prop */}
        <Prev onClick={handlePrevClick} />
      </div>
      {/* Render the Indicators component and pass the currentIndex, items, and handleSelect function as props */}
      <Indicators
        currentIndex={currentIndex}
        items={items}
        onClick={handleSelect}
      />
      <div>
        {}
        <Next onClick={handleNextClick} />
      </div>
    </>
  );
}

interface BannerProps {
  word: string;
}

function Banner({ word }: BannerProps) {
  return <h1>{word}</h1>;
}

interface DirectionProps {
  onClick: () => void;
}

function Prev({ onClick }: DirectionProps) {
  return <button onClick={onClick}>Prev</button>;
}

function Next({ onClick }: DirectionProps) {
  console.log(onClick);
  return <button onClick={onClick}>Next</button>;
}

interface IndicatorsProps {
  items: RotatingBannerProps['items'];
  currentIndex: number;
  onSelect: (index: number) => void;
}

function Indicators({ items, currentIndex, onClick }: IndicatorsProps) {
  console.log('items from indicator', items);
  return (
    <>
      {/* The map function iterates over each item in the items array, providing the item and its index. */}
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => onClick(index)} // Set the onClick handler to call onClick with the current index.
          style={{
            // Conditionally apply a style based on whether the current index matches the index of this button.
            backgroundColor: currentIndex === index ? 'lightblue' : '',
          }}>
          {index} {/* Display the index on the button */}
        </button>
      ))}
    </>
  );
}
