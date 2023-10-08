import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Bottom = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  display: flex;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const index: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Bottom>
        <Sidebar />
        <MainContainer>
          <Tabs />
          <Main />
        </MainContainer>
      </Bottom>
    </LayoutContainer>
  );
};

export default index;
