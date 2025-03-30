import CommentSection from "@/components/CommentSection";
import * as S from "./styles";

export default function CommentSectionPage() {
  return (
    <S.Main>
      <h1>Projeto de Seção de Comentários!</h1>
      <S.Container>
        <S.CommentContainer>
          <CommentSection />
        </S.CommentContainer>
      </S.Container>
    </S.Main>
  );
}
