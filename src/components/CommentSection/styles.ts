import styled from "styled-components";

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px; /* Altura máxima da seção de comentários */
  max-width: 600px;
  width: 600px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc; /* Borda opcional */
  border-radius: 8px; /* Bordas arredondadas */
`;

export const CommentInputContainer = styled.div`
  margin-bottom: 20px; /* Espaço entre o input e a lista de comentários */
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
  resize: none; /* Impede o redimensionamento */
  height: 100px; /* Altura fixa */
  color: black;
  background-color: white;
`;

export const CommentList = styled.div`
  flex-grow: 1; /* Permite que a lista de comentários ocupe o espaço restante */
  overflow-y: auto; /* Adiciona rolagem se necessário */
  margin-top: 10px; /* Espaço entre o input e a lista de comentários */
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
