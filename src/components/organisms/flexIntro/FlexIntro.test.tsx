import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexIntro from '.';

describe('Intro component tests', () => {
  test('Component renders without crashing', () => {
    render(<FlexIntro />);
    expect(
      screen.getByRole('heading', {name: 'Introducing Gazelle Flex'}),
    ).toBeInTheDocument();
  });
  test("On click 'Subscribe and save' button", () => {
    render(<FlexIntro />);
    expect(
      screen.getByRole('button', {name: 'Subscribe and save'}),
    ).toBeInTheDocument();
    //Test the behaviour after click
  });
});
