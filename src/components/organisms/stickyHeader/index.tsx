"use client";
import React from 'react';
import {SubHeaderProps} from 'globalTypes';
import {BsCheckLg} from 'react-icons/bs';
import VisibleOnScroll from '../../molecules/VisibleOnScroll';
interface HeaderProps {
  subHeaderArray: SubHeaderProps[];
}
export default function StickyHeader(props: HeaderProps) {
  const {subHeaderArray} = props;

  function handleSubscribe() {
    //handle subscribe
  }
  
  return (
    <VisibleOnScroll>
      <section
        data-testid={'sticky-header'}
        className={
          'w-full h-24 px-48 bg-white flex justify-between items-center shadow-md'
        }
      >
        <div className={'flex flex-row'}>
          {subHeaderArray.map((product, index) => (
            <div
              key={index}
              data-testid={'product-container'}
              className={`w-40 h-16 flex justify-center items-center flex-col border rounded-md mr-3 ${
                product.productName === 'iPhone 12'
                  ? 'border-2 border-primary text-primary font-semibold bg-primary bg-opacity-10'
                  : null
              }`}
            >
              <p>{product.productName}</p>
              <p className={'mt-1'}>${product.rentingPrice}/mo</p>
            </div>
          ))}
        </div>
        <div>
          <p
            className={'text-sm text-bgDarkGrey mb-1 flex flex-row items-center'}
          >
            <span>
              <BsCheckLg color={'#00a6b5'} size={20} className={'mr-2'} />
            </span>{' '}
            Use your phone with any carrier
          </p>
          <p
            className={'text-sm text-bgDarkGrey mb-1 flex flex-row items-center'}
          >
            <span>
              <BsCheckLg color={'#00a6b5'} size={20} className={'mr-2'} />
            </span>{' '}
            Eligible for upgrade after 6 months
          </p>
          <p
            className={'text-sm text-bgDarkGrey mb-1 flex flex-row items-center'}
          >
            <span>
              <BsCheckLg color={'#00a6b5'} size={20} className={'mr-2'} />
            </span>{' '}
            Free shipping and returns
          </p>
        </div>
        <button
          onClick={handleSubscribe}
          type="button"
          className={
            'text-white bg-primary h-16 hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-white rounded-lg px-5 py-2.5 text-center font-semibold'
          }
        >
          Subscribe and Save
        </button>
      </section>
    </VisibleOnScroll>
  );
}
