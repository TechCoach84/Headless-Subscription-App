import React, {useState} from 'react';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface RenderPageNumbersProps {
  totalPages: number;
  handlePageClick: (page: number) => void;
}

const RenderPageNumbers = (props: RenderPageNumbersProps) => {
  const {totalPages, handlePageClick} = props;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={'mx-3'}>
        <button onClick={() => handlePageClick(i)}>{i}</button>
      </li>,
    );
  }
  return <ul className={'flex flex-row'}>{pages}</ul>;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const {totalPages, onPageChange} = props;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <ul className="w-full flex flex-row justify-center items-center text-primary">
      <li>
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={
            currentPage === 1
              ? 'cursor-not-allowed text-primary opacity-30'
              : ''
          }
        >
          <BsChevronLeft size={16} color={'#ff6900'} />
        </button>
      </li>
      <RenderPageNumbers
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
      <li>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={
            currentPage === totalPages
              ? 'cursor-not-allowed text-primary opacity-30'
              : ''
          }
        >
          <BsChevronRight size={16} color={'#ff6900'} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
