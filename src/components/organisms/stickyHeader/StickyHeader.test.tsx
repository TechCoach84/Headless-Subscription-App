import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import StickyHeader from '.';

const sampleProducts = [
  {
    productName: 'Phone A',
    rentingPrice: 20,
  },
  {
    productName: 'iPhone 12',
    rentingPrice: 24,
  },
  {
    productName: 'Phone B',
    rentingPrice: 28,
  },
];
describe('Sticky header component', () => {
  test('Component shows after scrolling to a cerain height', () => {
    render(<StickyHeader subHeaderArray={sampleProducts} />);
    const stickyHeader = screen.getByTestId('sticky-header');
    expect(stickyHeader).not.toBeNull();
    fireEvent.scroll(window, {target: {scrollY: 1000}});
    waitFor(() => {
      expect(stickyHeader).toBeInTheDocument();
    });
  });
  test('Props are passed down correctly', () => {
    const {getAllByTestId} = render(
      <StickyHeader subHeaderArray={sampleProducts} />,
    );
    const productContainer = getAllByTestId('product-container');
    expect(productContainer).toHaveLength(3);
    const iPhone12Container = productContainer[1];
    expect(iPhone12Container).toHaveTextContent('iPhone 12');
    expect(iPhone12Container).toHaveClass(
      'border-primary text-primary font-semibold bg-primary bg-opacity-10',
    );
  });
  test('Subscribe and save button', () => {
    const {getByRole} = render(
      <StickyHeader subHeaderArray={sampleProducts} />,
    );
    expect(
      getByRole('button', {name: 'Subscribe and Save'}),
    ).toBeInTheDocument();
    //test on click the button
  });
});
