import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HowItWorksSection from '.';

const sampleSteps = [
  {
    step: 1,
    title: 'Step 1',
    description: 'This is a sample description of step 1',
  },
  {
    step: 2,
    title: 'Step 2',
    description: 'This is a sample description of step 2',
  },
];
describe('How it works section tests', () => {
  test('Component renders without crashing', () => {
    render(<HowItWorksSection howItWorks={sampleSteps} />);
    expect(
      screen.getByRole('heading', {name: 'How it works'}),
    ).toBeInTheDocument();
  });
  test('Props are being passed down correctly', () => {
    const howItWorks = render(<HowItWorksSection howItWorks={sampleSteps} />);
    const howItWorksSection = howItWorks.getAllByTestId('step-card');
    expect(howItWorksSection).toHaveLength(2);
  });
});
