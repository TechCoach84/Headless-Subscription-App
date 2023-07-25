import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import chargeImage from '../../../@images/charge.png';
import handImage from '../../../@images/hand.png';
import upgradeImage from '../../../@images/upgrade.svg';
import refurbishedImage from '../../../@images/refurbished.svg';
import depositImage from '../../../@images/deposit.svg';
import TheDetail from '.';

const details = [
  {
    text: 'Charging cable included',
    icon: chargeImage,
    showTooltip: false,
  },
  {
    text: '12-month subscription agreement.',
    icon: handImage,
    showTooltip: false,
  },
  {
    text: 'Eligible to upgrade after 6 months.',
    icon: upgradeImage,
    showTooltip: true,
  },
  {
    text: 'All certified refurbished devices are in Good condition.',
    icon: refurbishedImage,
    showTooltip: true,
  },
  {
    text: '$49.99 deposit, refundable upon device return.',
    icon: depositImage,
    showTooltip: false,
  },
];
describe('The Detail component tests', () => {
  test('Component renders without crashing', () => {
    render(<TheDetail details={details} />);
    expect(screen.getByTestId('detail-title')).toHaveTextContent('The Details');
  });

  test('Check data displayed successfully', () => {
    render(<TheDetail details={details} />);
    expect(
      screen.getByTestId('text-with-icon-' + details[0].text)
    ).toHaveTextContent(details[0].text);
  });
});
