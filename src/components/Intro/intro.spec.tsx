import React from 'react';
import Intro from './Intro';
import {shallow} from 'enzyme';


describe('Intro', () => {
  const defaultProps = {
    onSubscribeNow: () => {},
    image: 'image-url',
    paymentImage: 'paymentImage-url',
    eligibleImage: 'eligibleImage-url',
    refurbishedImage: 'refurbishedImage-url',
  };

  it('renders without crashing', () => {
    shallow(<Intro {...defaultProps} />);
  });

  it('renders the title', () => {
    const wrapper = shallow(<Intro {...defaultProps} />);
    const titleDiv = wrapper.find('.title');
    expect(titleDiv.text()).toBe(String('Introducing Gazelle Flex.'));
  });

  it('renders the price', () => {
    const wrapper = shallow(<Intro {...defaultProps} />);
    const priceDiv = wrapper.find('.price');
    expect(priceDiv.text()).toBe('As low as $19.99/month.');
  });

  it('renders the image with correct props', () => {
    const wrapper = shallow(<Intro {...defaultProps} />);
    const image = wrapper.find('Image');
    expect(image.prop('src')).toBe(defaultProps.image);
    expect(image.prop('alt')).toBe('shop');
  });
});
