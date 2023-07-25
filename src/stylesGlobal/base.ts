const size = {
  xs: '370px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1500px',
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};

// use case

/* import styled from 'styled-components';
import { device } from './base';

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.xs} { 
    max-width: 800px;
  }

  @media ${device.sm} {
    max-width: 1400px;
  }
`; */
