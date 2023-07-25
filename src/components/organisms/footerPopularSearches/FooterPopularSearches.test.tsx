import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterPopularSearches from '.';

const samplePopularSearches = [
  {
    name: 'Popular Search 1',
    link: 'https://www.gazelle.com/our_story',
  },
  {
    name: 'Popular Search 2',
    link: 'https://www.gazelle.com/help/contact_us',
  },
  {
    name: 'Popular Search 3',
    link: '#',
  },
];
describe('Footer popular searches tests', () => {
  test('Component renders without crashing', () => {
    render(
      <FooterPopularSearches footerPopularSearches={samplePopularSearches} />,
    );
    expect(
      screen.getByRole('heading', {name: 'Certifications'}),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: 'Popular Searches'}),
    ).toBeInTheDocument();
  });
  test('Redirection on clicking a popular search', () => {
    render(
      <FooterPopularSearches footerPopularSearches={samplePopularSearches} />,
    );
    const popularSearch = screen.getByText('Popular Search 1');
    fireEvent.click(popularSearch);
    waitFor(() => {
      expect(window.location.href).toBe('https://www.gazelle.com/our_story');
    });
  });
});
