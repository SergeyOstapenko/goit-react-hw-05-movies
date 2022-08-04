import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: red;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;