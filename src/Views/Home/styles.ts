import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 20%;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  margin-top: 10px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/assets/images/portfolio-image.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;
