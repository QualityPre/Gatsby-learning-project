import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
// Components

import Footer from './Footer';
import Nav from './Nav';
import stripes from '../assets/images/stripes.svg';

// Imported Styles
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

// Styles

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);

  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  background-size: 1500px;
  background: white url(${stripes});
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          <p>Page Content</p>
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
