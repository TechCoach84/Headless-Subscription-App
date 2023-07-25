'use client';
import React from 'react';
import HowItWorksCard from '../howItWorks';
import {HowItWorksProps} from 'globalTypes';
import {
  FaShoppingCart,
  FaBoxOpen,
  FaRocket,
  FaArrowRight,
} from 'react-icons/fa';

interface HowItWorks {
  howItWorks: HowItWorksProps[];
}
export default function HowItWorksSection({howItWorks}: HowItWorks) {
  return (
    <section className={'w-full px-48 py-10'}>
      <h2 className={'font-bold text-3xl my-4'}>How it works</h2>
      <div className="w-full h-auto flex flex-row items-center justify-between">
        {howItWorks.map((step, index) => (
          <div key={index} className={'flex flex-row items-center'}>
            <div
              className={step.step === 3 ? 'mr-0' : 'mr-4'}
              data-testid={'step-card'}
            >
              <HowItWorksCard
                step={step.step}
                title={step.title}
                description={step.description}
                icon={
                  step.step === 1
                    ? FaShoppingCart
                    : step.step === 2
                    ? FaBoxOpen
                    : FaRocket
                }
              />
            </div>
            <div className={`${step.step === 3 ? 'hidden' : 'block'}`}>
              <FaArrowRight size={40} color={'#00a6b5'} className={'mx-4'} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
