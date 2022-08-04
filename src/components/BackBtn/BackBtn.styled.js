import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtnStyled = styled(NavLink)`
  width: 90px;
  margin-bottom: 20px;
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000;
  transition: all 250 linear;
  &:hover {
    color: blue;
  }
`;
export const NotFoundStyled = styled(NavLink)`
  width: 90px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 250 linear;
  font-size: 20px;
  &:hover {
    color: blue;
  }
`;

export const DivStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.p`
  font-size: 40px;
  text-align: center;
`;
