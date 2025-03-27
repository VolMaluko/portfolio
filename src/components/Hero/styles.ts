import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100dvh;
  padding: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    height: auto;
    min-height: 100dvh;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const TextContent = styled.div`
  max-width: 50%;
  z-index: 10;
  color: white;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }

  h2 {
    color: #7e57c2;
    margin-bottom: 10px;
    background-color: rgba(126, 87, 194, 0.2);
    display: inline-block;
    padding: 5px 10px;

    @media (max-width: 1024px) {
      margin-bottom: 15px;
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.7);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const ConnectButton = styled.a`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 12px 5px 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 37.4%;
  max-height: 100%;

  @media (max-width: 1024px) {
    max-width: 100%;
    justify-content: center;
    margin: 0 auto;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const AstronautContainer = styled.div`
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      max-width: 80%;
      height: auto;
    }
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

export const BlueSphere = styled.div`
  position: absolute;
  top: 20%;
  right: 40%;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    circle,
    rgba(100, 200, 255, 0.7) 0%,
    rgba(100, 200, 255, 0) 70%
  );
  border-radius: 50%;
  filter: blur(20px);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SpaceRocket = styled.div`
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 50px;
  height: 50px;
  background: url("/rocket.png");
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MovingLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    display: none;
  }

  div {
    position: absolute;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    height: 1px;
    width: 200px;
    transform: rotate(45deg);
  }

  div:nth-child(1) {
    top: 20%;
    left: -10%;
  }
  div:nth-child(2) {
    top: 60%;
    right: -10%;
    transform: rotate(-45deg);
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/banner-bg.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: repeat;
  z-index: -1;
`;
