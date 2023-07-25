import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HowItWorksCard from '.';
import {FaShoppingCart} from 'react-icons/fa';

const steps = [
  {
    step: 1,
    title: 'Choose your plan',
    description:
      'Pick what best fits your style, use and budget. All unlocked for whatever floats you boat',
  },
  {
    step: 2,
    title: 'Get your device',
    description:
      'Enjoy your new-to-you device. Do your happy dance - you just scored some cool tech with predicatable monthly payments',
  },
];

describe('Intro component tests', () => {
  test('Component renders without crashing', () => {
    render(
      <HowItWorksCard
        step={steps[0].step}
        title={steps[0].title}
        description={steps[0].description}
        icon={FaShoppingCart}
      />,
    );
    expect(screen.getByText('Choose your plan')).toBeInTheDocument();
  });
  test('Props are being passed down correctly', () => {
    render(
      <HowItWorksCard
        step={steps[0].step}
        title={steps[0].title}
        description={steps[0].description}
        icon={FaShoppingCart}
      />,
    );
    expect(screen.getByRole('heading', {name: '1'})).toBeInTheDocument();
    expect(screen.getByText('Choose your plan')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Pick what best fits your style, use and budget. All unlocked for whatever floats you boat',
      ),
    ).toBeInTheDocument();
  });
});
