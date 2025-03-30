import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100dvh;
  padding: 5rem;
  justify-self: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 900px;
    height: 30%;
    padding: 3rem;
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 1440px;
  max-height: 100dvh;
  height: 500px;
  padding: 20rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 10%;
    padding: 1rem 0 0 5rem;
    margin-top: 0px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 400px;
  max-height: 100dvh;
  justify-content: center;
  align-items: center;
`;
