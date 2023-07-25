import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '.';

const sampleFooterLinks = [
  {
    name: 'About Us',
    link: 'https://www.gazelle.com/our_story',
  },
  {
    name: 'Contact Us',
    link: 'https://www.gazelle.com/help/contact_us',
  },
  {
    name: 'FAQ',
    link: 'https://www.gazelle.com/help/faq/buy',
  },
];
describe('Footer component tests', () => {
  test('Component renders without crashing', () => {
    render(<Footer footerLinks={sampleFooterLinks} />);
    expect(screen.getByRole('heading', {name: 'Contact'})).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {name: 'Connect with us'}),
    ).toBeInTheDocument();
  });
  test('Redirection on click social links', () => {
    render(<Footer footerLinks={sampleFooterLinks} />);
    const facebook = screen.getByText('Facebook');
    fireEvent.click(facebook);
    waitFor(() => {
      expect(window.location.href).toBe('https://www.facebook.com/Gazelle.com');
    });
  });
  test('Redirection on click website links', () => {
    render(<Footer footerLinks={sampleFooterLinks} />);
    const link = screen.getByText('About Us');
    fireEvent.click(link);
    waitFor(() => {
      expect(window.location.href).toBe('https://www.gazelle.com/our_story');
    });
  });
});
