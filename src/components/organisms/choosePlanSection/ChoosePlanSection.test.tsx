import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import ChoosePlanSection from '.';

const sampleProducts = [
  {
    productName: 'iPhone 11',
    rentingPrice: 20.99,
    carrier: 'Unlocked',
    storageSpace: '64',
    productQuality: 'Good',
    src: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
  },
  {
    productName: 'iPhone 12',
    rentingPrice: 12.99,
    carrier: 'AT&T',
    storageSpace: '128',
    productQuality: 'Excellent',
    src: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
  },
  {
    productName: 'Phone A',
    rentingPrice: 12.99,
    carrier: 'AT&T',
    storageSpace: '128',
    productQuality: 'Excellent',
    src: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
  },
];
const sampleProductColors = [
  {
    color: 'Silver',
    hex: '#c0c0c0',
  },
  {
    color: 'Midnight',
    hex: '#000',
  },
  {
    color: 'White',
    hex: '#000',
  },
];
describe('Intro component tests', () => {
  const handleClickMock = jest.fn();
  test('Component renders without crashing', () => {
    render(
      <ChoosePlanSection
        flexProductColors={sampleProductColors}
        flexProducts={sampleProducts}
        handleClick={handleClickMock}
      />,
    );
    expect(
      screen.getByRole('heading', {name: 'Choose the right plan for you'}),
    ).toBeInTheDocument();
  });
  test('Props are being passed down correctly', () => {
    const planSection = render(
      <ChoosePlanSection
        flexProductColors={sampleProductColors}
        flexProducts={sampleProducts}
        handleClick={handleClickMock}
      />,
    );
    const planCardSection = planSection.getAllByTestId('plan-card');
    expect(planCardSection).toHaveLength(3);
  });
  test('Modal toggles on click', () => {
    render(
      <ChoosePlanSection
        flexProductColors={sampleProductColors}
        flexProducts={sampleProducts}
        handleClick={handleClickMock}
      />,
    );
    const chooseBtn = screen.getAllByRole('button', {name: 'Choose Plan'});
    fireEvent.click(chooseBtn[0]);
    waitFor(() => {
      expect(
        screen.getByRole('heading', {name: 'Choose your device color'}),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', {name: 'iPhone 11'}),
      ).toBeInTheDocument();
      expect(screen.getByTestId('tagline')).toHaveTextContent(
        'Budget Friendly',
      );
      expect(screen.getByText('Color: Midnight')).toBeInTheDocument();
      expect(screen.getByText('Subscribe for $20.99/mo.')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole('button', {name: 'Close modal'}));
    waitFor(() => {
      expect(
        screen.getByRole('heading', {name: 'Choose your device color'}),
      ).not.toBeInTheDocument();
    });
  });
  test('Modal functionalities', () => {
    render(
      <ChoosePlanSection
        flexProductColors={sampleProductColors}
        flexProducts={sampleProducts}
        handleClick={handleClickMock}
      />,
    );
    const chooseBtn = screen.getAllByRole('button', {name: 'Choose Plan'});
    fireEvent.click(chooseBtn[1]);
    const changeColorBtn = screen.getAllByTestId('change-color-btn');
    const colorContainer = screen.getAllByTestId('color-container');
    expect(colorContainer[2]).toHaveClass('border-black');
    expect(screen.getByTestId('tagline')).toHaveTextContent('Most Popular');
    expect(changeColorBtn).toHaveLength(3);
    fireEvent.click(changeColorBtn[0]);
    waitFor(() => {
      expect(screen.getByText('Color: Silver')).toBeInTheDocument();
    });
    fireEvent.click(
      screen.getByRole('button', {name: 'Add subscription to cart'}),
    );
    waitFor(() => {
      expect(
        screen.getByRole('heading', {name: 'Choose your device color'}),
      ).not.toBeInTheDocument();
    });
    fireEvent.click(chooseBtn[2]);
    waitFor(() => {
      expect(screen.getByTestId('tagline')).toHaveTextContent(
        'Latest and greatest',
      );
    });
  });
});
