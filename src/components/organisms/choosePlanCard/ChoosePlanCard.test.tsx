import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ChoosePlanCard from '.';

describe('Intro component tests', () => {
  const chooseIphone13Plan = jest.fn();
  test('Component renders without crashing', () => {
    render(
      <ChoosePlanCard
        bgColor={'bg-black'}
        titleContent={'Latest and greatest'}
        src="https://images.unsplash.com/photo-1636108840454-8fbe394c7837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        nameOfProduct="iPhone 13"
        monthlyCost={34.99}
        carrier={'Unlocked'}
        storageSpace={'128'}
        productQuality={'Good'}
        handleChoosePlan={chooseIphone13Plan}
      />,
    );
    expect(
      screen.getByRole('heading', {name: 'iPhone 13'}),
    ).toBeInTheDocument();
  });
  test('Props are being passed down correctly', () => {
    const {rerender} = render(
      <ChoosePlanCard
        bgColor={'bg-black'}
        titleContent={'Latest and greatest'}
        src="https://images.unsplash.com/photo-1636108840454-8fbe394c7837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        nameOfProduct="iPhone 13"
        monthlyCost={34.99}
        carrier={'Unlocked'}
        storageSpace={'128'}
        productQuality={'Good'}
        handleChoosePlan={chooseIphone13Plan}
      />,
    );
    expect(screen.getByText('Latest and greatest')).toBeInTheDocument();
    rerender(
      <ChoosePlanCard
        bgColor={'bg-black'}
        titleContent={'Budget Phone'}
        src="https://images.unsplash.com/photo-1636108840454-8fbe394c7837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        nameOfProduct="iPhone 13"
        monthlyCost={34.99}
        carrier={'Unlocked'}
        storageSpace={'128'}
        productQuality={'Good'}
        handleChoosePlan={chooseIphone13Plan}
      />,
    );
    expect(screen.getByText('Budget Phone')).toBeInTheDocument();
  });
  test("On click 'Choose Plan' button", () => {
    render(
      <ChoosePlanCard
        bgColor={'bg-black'}
        titleContent={'Latest and greatest'}
        src="https://images.unsplash.com/photo-1636108840454-8fbe394c7837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        nameOfProduct="iPhone 13"
        monthlyCost={34.99}
        carrier={'Unlocked'}
        storageSpace={'128'}
        productQuality={'Good'}
        handleChoosePlan={chooseIphone13Plan}
      />,
    );
    expect(
      screen.getByRole('button', {name: 'Choose Plan'}),
    ).toBeInTheDocument();
    //Test the behaviour after click
  });
});
