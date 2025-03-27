import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  z-index: 100;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #7e57c2;
  }
`;

export const MobileNavButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 200;
  }
`;

export const MobileSidebar = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? "0" : "-100%")};
    width: 250px;
    height: 100vh;
    background-color: black;
    color: white;
    transition: left 0.3s ease;
    z-index: 150;
    padding: 4rem 0;
  }
`;

export const MobileSidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileSidebarLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MobileSidebarDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0;
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }
`;
