'use client';
import React from 'react';
import { BsFillImageFill } from 'react-icons/bs';
import { DetailProps } from '../../../../globalTypes';
import TextWithIcon from '../../atoms/TextWithIcon';

interface Details {
  details: DetailProps[];
}

export default function TheDetail(props: Details) {
  const { details } = props;

  return (
    <section className={'w-full px-48 py-10 bg-bgLightGrey'}>
      <div
        className={'flex flex-row justify-between items-center mt-6 mb-12'}
        data-testid={'detail-title'}
      >
        <h2 className={'font-bold text-3xl'}>The Details</h2>
      </div>
      <div className={'w-full h-full flex flex-row justify-between pb-6'}>
        <div className={'w-1/2 h-full'}>
          <div>
            {details &&
              details.map((detail, index) => (
                <TextWithIcon key={index} detail={detail} />
              ))}
          </div>
        </div>
        <div className={'w-1/3 h-50 bg-white flex justify-center items-center'}>
          <BsFillImageFill color={'#5b5b5b'} size={80} />
        </div>
      </div>
    </section>
  );
}
