'use client';
import React from 'react';
import {Image} from '@chakra-ui/image';
import {Link} from '@chakra-ui/react';
import {FooterPopularSearchesProps} from '#/globalTypes';

interface PopularSearchesProps {
  footerPopularSearches: FooterPopularSearchesProps[];
}
export default function FooterPopularSearches(props: PopularSearchesProps) {
  const {footerPopularSearches} = props;
  return (
    <section className={'w-full bg-black'}>
      <div className={'w-full flex flex-row px-48 py-10'}>
        <div className={'w-1/4 flex flex-col items-start text-bgLightGrey'}>
          <h4 className={'font-medium text-xl mb-4'}>Certifications</h4>
          <Image
            src={
              'https://images.ctfassets.net/slwemikclfm1/51QcZHHV3WoMSQC0myeEOW/3dc988c9432e06fe9393aa0d0d49064e/bbb_white_black_seal.png'
            }
            alt={'Accredited Business'}
            width={200}
            height={80}
          />
        </div>
        <div className={'w-3/4 flex flex-col items-start text-fontGrey'}>
          <h4 className={'font-medium text-xl mb-4'}>Popular Searches</h4>
          <div className={'w-full flex flex-row flex-wrap'}>
            {footerPopularSearches.map((search, index) => (
              <Link
                key={index}
                href={search.link}
                className={
                  'w-1/4 flex items-start text-sm mb-2 hover:underline cursor-pointer'
                }
              >
                {search.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
