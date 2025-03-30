import React, { useState } from "react";
import * as S from "./styles"; // Importando os estilos

const CommentApp = () => {
  const [comments, setComments] = useState<{ text: string; comment: string }[]>(
    []
  );
  const [text, setText] = useState("");
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (text && comment) {
      setComments([...comments, { text, comment }]);
      setText(""); // Limpa o input
      setComment(""); // Limpa a textarea
    }
  };

  return (
    <S.CommentSection>
      <S.CommentInputContainer>
        <S.CommentInput
          type="text"
          placeholder="Seu nome"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <S.CommentTextArea
          placeholder="Seu comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <S.SubmitButton onClick={handleAddComment}>
          Adicionar Comentário
        </S.SubmitButton>
      </S.CommentInputContainer>
      <S.CommentList>
        {comments.map((c, index) => (
          <S.CommentItem key={index}>
            <strong>{c.text}</strong>: {c.comment}
          </S.CommentItem>
        ))}
      </S.CommentList>
    </S.CommentSection>
  );
};

export default CommentApp; // Exportando o componente
