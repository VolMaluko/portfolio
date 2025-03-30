import styled from "styled-components";

export const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  height: 100dvh;
  background-color: #1a1a1a;
`;

export const WorkCard = styled.div`
  background: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin-top: 6rem;
  width: 300px;
  max-height: 20%;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WorkImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  justify-content: flex-end;
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
