import React, {useState} from 'react';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

interface CarouselProps {
  totalItems: number;
  children: React.ReactNode;
  itemsToShow: number;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  title: string;
}

const FlexCarousel: React.FC<CarouselProps> = (props) => {
  const {totalItems, itemsToShow, children, startIndex, setStartIndex, title} =
    props;

  const handlePrevClick = () => {
    setStartIndex(startIndex - itemsToShow);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + itemsToShow);
  };

  return (
    <div className={'w-full'}>
      <div className={'flex flex-row justify-between items-center my-6'}>
        <h2 className={'font-bold text-3xl'}>{title}</h2>
        <div className={'flex flex-row'}>
          <button
            disabled={startIndex === 0}
            onClick={handlePrevClick}
            className={startIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}
            data-testid={'prev-btn'}
          >
            <BsChevronLeft size={40} color={'#ff6900'} className={'mr-6'} />
          </button>
          <button
            disabled={startIndex + itemsToShow >= totalItems}
            onClick={handleNextClick}
            className={
              startIndex + itemsToShow >= totalItems
                ? 'opacity-30 cursor-not-allowed'
                : ''
            }
            data-testid={'next-btn'}
          >
            <BsChevronRight size={40} color={'#ff6900'} />
          </button>
        </div>
      </div>
      <div className={'w-full flex flex-row overflow-hidden'}>{children}</div>
    </div>
  );
};

export default FlexCarousel;
