import styled from "styled-components";

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  max-width: 600px;
  width: 600px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 30%;
    padding: 3rem;
    margin-top: 0px;
  }
`;

export const CommentInputContainer = styled.div`
  margin-bottom: 20px;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
  background-color: white;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
  color: black;
  background-color: white;
`;

export const CommentList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 10px;
`;

export const CommentItem = styled.div`
  background: #e9ecef;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  color: black;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: rgb(158, 160, 158);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(134, 136, 134);
  }
`;
