import React from 'react';
import styled from 'styled-components';
const SideContainer = styled.aside`
  width: 250px;
  height: 100%;
  border-right: 1px solid #e8dddd;
`;
const Sidebar: React.FC = () => {
  return <SideContainer>Sidebar</SideContainer>;
};

export default Sidebar;
