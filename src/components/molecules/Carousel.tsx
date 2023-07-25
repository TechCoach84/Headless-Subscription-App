import React, {useState} from 'react';
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';

interface CarouselProps {
  totalItems: number;
  children: React.ReactNode;
  itemsToShow: number;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const {totalItems, itemsToShow, children, startIndex, setStartIndex} = props;

  const handlePrevClick = () => {
    setStartIndex(startIndex - itemsToShow);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + itemsToShow);
  };

  return (
    <div className={'w-full flex flex-row '}>
      <button
        disabled={startIndex === 0}
        onClick={handlePrevClick}
        className={startIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}
      >
        <GrFormPrevious size={28} />
      </button>
      {children}
      <button
        disabled={startIndex + itemsToShow >= totalItems}
        onClick={handleNextClick}
        className={
          startIndex + itemsToShow >= totalItems
            ? 'opacity-30 cursor-not-allowed'
            : ''
        }
      >
        <GrFormNext size={28} />
      </button>
    </div>
  );
};

export default Carousel;
