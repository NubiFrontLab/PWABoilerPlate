import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ccc;
`;

const TabLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: #000;

  &.active {
    font-weight: bold;
    color: #007bff;
  }
`;

const Tabs: React.FC = () => {
    return (
        <TabsContainer>
            <TabLink to="/camera" activeClassName="active">Camera</TabLink>
            <TabLink to="/onboarding" activeClassName="active">Onboarding</TabLink>
        </TabsContainer>
    );
};

export default Tabs;