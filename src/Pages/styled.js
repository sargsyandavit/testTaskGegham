/**
 * @file.
 * Contain Home styles.
 */

import styled, { css } from 'styled-components';

export const Header = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 0;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavItem = styled.div`
    padding: 5px 13px;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 5px;
    text-transform: uppercase;
    color: crimson;
    box-shadow: 0 0 5px #8b000069;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;

    ${props => props.isActive && css`
      background: yellow;
    `}
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CatWrapper = styled.div`
 padding: 5px;
 height: 300px;
 width: 280px;
 box-shadow: 0 0 5px #8b000069;
`;

export const CatsWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
`;


export const CatImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoadMore = styled.button`
  border: 0;
  border-radius: 20px;
  margin: 50px auto;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  display: block;
  cursor: pointer;
`;