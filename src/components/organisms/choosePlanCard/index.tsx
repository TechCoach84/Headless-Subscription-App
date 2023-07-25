"use client";
import React from 'react';
import Image from 'next/image';
import {GrAddCircle} from 'react-icons/gr';
import {FaStar} from 'react-icons/fa';

interface PlanCardProps {
  bgColor: string;
  titleContent: string;
  src: string;
  nameOfProduct: string;
  monthlyCost: number;
  carrier: string;
  storageSpace: string;
  productQuality: string;
  handleChoosePlan: () => void;
}
export default function ChoosePlanCard(props: PlanCardProps) {
  const {
    bgColor,
    titleContent,
    src,
    nameOfProduct,
    monthlyCost,
    carrier,
    storageSpace,
    productQuality,
    handleChoosePlan,
  } = props;

  return (
    <section className={'w-96 h-auto shadow-md rounded-xl'}>
      <div
        className={`w-full h-16 ${bgColor} flex justify-center items-center rounded-t-xl`}
      >
        <p className={'text-white font-medium text-lg'}>{titleContent}</p>
      </div>
      <div
        className={
          'w-full h-[calc(100% -64px)] p-6 flex flex-col items-center justify-between bg-white rounded-b-xl'
        }
      >
        <Image
          src={src}
          alt={'iPhone to be rented out'}
          width={100}
          height={100}
        />
        <h3 className="text-black font-bold text-2xl my-2">{nameOfProduct}</h3>
        <p className="text-black font-medium text-lg my-2">
          Subscribe for{' '}
          <span className={'text-flexThemeBlue'}>
            {'$'}
            {monthlyCost}
            {'/mo'}
          </span>
        </p>
        <div className={'w-full h-px bg-bgLightGrey my-2'}></div>
        <div
          className={'w-full flex flex-row h-16 justify-between items-center'}
        >
          <p className={'text-lg'}>{carrier}</p>
          <div className={'w-0.5 h-6 bg-flexThemeBlue'}></div>
          <p className={'text-lg'}>{storageSpace} GB</p>
          <div className={'w-0.5 h-6 bg-flexThemeBlue'}></div>
          <p className={'text-lg'}>{productQuality}</p>
          <div className={'w-0.5 h-6 bg-flexThemeBlue'}></div>
          <div className={'flex flex-row'}>
            <div className={'w-6 h-6 bg-black rounded-full mr-1'}></div>
            <div
              className={'w-6 h-6 bg-white rounded-full border-2 mr-1'}
            ></div>
            <div className={'w-6 h-6 bg-green rounded-full mr-1'}></div>
            <GrAddCircle size={24} color="#ff6900" />
          </div>
        </div>
        <div className={'w-full h-px bg-bgLightGrey my-2'}></div>
        <div
          className={'w-full flex flex-row justify-center items-center my-4'}
        >
          <FaStar color={'#00a6b5'} size={14} className={'ml-2'} />
          <FaStar color={'#00a6b5'} size={14} className={'ml-2'} />
          <FaStar color={'#00a6b5'} size={14} className={'ml-2'} />
          <FaStar color={'#00a6b5'} size={14} className={'ml-2'} />
          <FaStar color={'#00a6b5'} size={14} className={'ml-2'} />
          <p className={'ml-2 text-lg'}>100 reviews</p>
        </div>
        <div className={'w-full h-px bg-bgLightGrey mt-2 mb-4'}></div>
        <button
          onClick={handleChoosePlan}
          type="button"
          className={
            'w-full text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-white rounded-lg px-5 py-2.5 text-lg text-center uppercase'
          }
        >
          Choose Plan
        </button>
      </div>
    </section>
  );
}
