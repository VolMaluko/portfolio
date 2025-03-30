import * as S from "./styles";

export default function ProjectsPage() {
  const works = [
    {
      title: "To do List",
      description:
        "Uma to do list com toggle dark/white e drag & drop das atividades para organização",
      image: "todo-preview.png",
      link: "/todo",
    },
    {
      title: "Login Page",
      description: "Uma login page normal com signup, forgot password",
      image: "LoginPage.png",
      link: "/login",
    },
  ];

  return (
    <S.WorksContainer>
      {works.map((work, index) => (
        <S.WorkCard key={index}>
          <S.WorkImage src={work.image} alt={work.title} />
          <S.WorkContent>
            <S.WorkTitle>{work.title}</S.WorkTitle>
            <S.WorkDescription>{work.description}</S.WorkDescription>
            <S.WorkButton href={work.link}>Ver Projeto</S.WorkButton>
          </S.WorkContent>
        </S.WorkCard>
      ))}
    </S.WorksContainer>
  );
}
