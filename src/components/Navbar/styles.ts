import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: transparent;
  color: white;
  z-index: 100;
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1777px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }

  .social-links {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0 20px;
  }
`;

export const ConnectButton = styled.a`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;
