'use client';

import React from 'react';
import {
  getHowItWorks,
  getProducts,
  getFlexProductColors,
  getDetails,
} from '../AllData';
import FlexIntro from '@/components/organisms/flexIntro';
import TheDetail from '@/components/organisms/theDetail';
import ChoosePlanSection from '@/components/organisms/choosePlanSection';
import HowItWorksSection from '@/components/organisms/howItWorksSection';
import StickyHeader from '@/components/organisms/stickyHeader';
import { useQuery } from '@apollo/client';
import { GET_SMARTPHONES } from '../../graphql/Queries';

export default function Homepage() {
  const { flexProductsArray, subHeaderArray } = getProducts();
  const howItWorks = getHowItWorks();
  const flexProductColors = getFlexProductColors();
  const details = getDetails();
  const { loading, error, data } = useQuery(GET_SMARTPHONES);
  const phones = data?.collectionByHandle?.products?.edges;

  console.log(phones); // testing whether the api fetched data

  return (
    <div>
      <FlexIntro />
      <ChoosePlanSection
        flexProducts={flexProductsArray}
        flexProductColors={flexProductColors}
      />
      {}
      <StickyHeader subHeaderArray={subHeaderArray} />
      <HowItWorksSection howItWorks={howItWorks} />
      <TheDetail details={details} />
    </div>
  );
}
