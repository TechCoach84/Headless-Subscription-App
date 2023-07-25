import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterLegalSection from '.';

const sampleMessage = 'This is a sample copyright message';

describe('Footer legal section tests', () => {
  test('Component renders without crashing', () => {
    render(<FooterLegalSection copyrightMessage={sampleMessage} />);
    expect(screen.getByTestId('legal-section')).toBeTruthy();
  });
  test('Props are passed correctly', () => {
    render(<FooterLegalSection copyrightMessage={sampleMessage} />);
    expect(
      screen.getByText(/This is a sample copyright message/i),
    ).toBeInTheDocument();
  });
});
