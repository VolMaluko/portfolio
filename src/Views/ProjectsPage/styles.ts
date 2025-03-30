import styled from "styled-components";

export const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3rem;
  height: 100dvh;
  background-color: #1a1a1a;
  overflow-y: scroll;
  padding: 0.3rem;
`;

export const WorkCard = styled.div`
  background: #2c2c2c;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin-top: 6rem;
  width: 325px;
  height: 23%;
  max-height: 100%;
  max-width: 100%;

  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 325px;
    height: 35%;
    padding: 0rem;
    margin-top: 0px;

    &:first-child {
      margin-top: 3rem;
    }
  }
`;

export const WorkImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fit;
  transition: transform 0.3s;
  z-index: 1;
`;

export const WorkContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`;

export const WorkTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #ffffff;
`;

export const WorkDescription = styled.p`
  color: #cccccc;
`;

export const WorkButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background: linear-gradient(45deg, #007bff, #00c6ff);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(45deg, #00c6ff, #007bff);
    transform: scale(1.05);
  }
`;
