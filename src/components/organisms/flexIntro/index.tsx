'use client';
import React from 'react';
import {BsCalendar, BsCoin, BsFillImageFill, BsPhone} from 'react-icons/bs';

export default function FlexIntro() {
  function handleSubscribe() {
    //handle subscribe here
  }
  return (
    <section
      className={
        'w-full h-full flex flex-row justify-between px-48 pt-24 pb-10'
      }
    >
      <div className={'w-2/3 h-full'}>
        <h1 className={'text-6xl font-semibold text-flexThemeBlue'}>
          Introducing Gazelle Flex
        </h1>
        <h6 className={'text-3xl font-medium mt-5'}>As low as $18.99/month.</h6>

        <div className={'my-8'}>
          <p className={'flex flex-row my-3 text-lg font-medium'}>
            <span>
              <BsCoin color="#00a6b5" size={28} className={'mr-4'} />
            </span>
            One low monthly payment
          </p>
          <p className={'flex flex-row my-3 text-lg font-medium'}>
            <span>
              <BsPhone color="#00a6b5" size={28} className={'mr-4'} />
            </span>
            Get a refurbished, unlocked phone and use it with any carrier
          </p>
          <p className={'flex flex-row my-3 text-lg font-medium'}>
            <span>
              <BsCalendar color="#00a6b5" size={28} className={'mr-4'} />
            </span>
            Keep it for 12 months and upgrade after 6 months
          </p>
        </div>
        <button
          onClick={handleSubscribe}
          type="button"
          className={
            'text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-white rounded-lg px-5 py-2.5 text-lg text-center uppercase'
          }
        >
          Subscribe and save
        </button>
        <p className={'text-fontGrey mt-8'}>
          Already a subscriber?{' '}
          <span className={'text-primary cursor-pointer'}>
            Check your upgrade eligibility now
          </span>
        </p>
      </div>
      <div
        className={'w-1/3 h-96 bg-bgLightGrey flex justify-center items-center'}
      >
        <BsFillImageFill color={'#5b5b5b'} size={80} />
      </div>
    </section>
  );
}
