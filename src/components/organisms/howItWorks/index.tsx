import React from 'react';
import {IconType} from 'react-icons';

interface HowItWorksProps {
  step: number;
  title: string;
  description: string;
  icon: IconType;
}
export default function HowItWorksCard(props: HowItWorksProps) {
  const {step, title, description, icon: Icon} = props;
  return (
    <section
      className={
        'w-[330px] h-96 border-2 border-bgLightGrey rounded-xl p-8 flex flex-col justify-between items-center'
      }
    >
      <h1 className={'font-extrabold text-6xl text-flexThemeBlue mb-3'}>
        {step}
      </h1>
      <Icon size={72} color={'#00a6b5'} className={'mb-4'} />
      <h4 className={'font-medium text-2xl mb-4'}>{title}</h4>
      <p className={'text-center mb-4'}>{description}</p>
    </section>
  );
}
