import * as S from "./styles";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setError("Todos os campos são obrigatórios.");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      if (response.ok) {
        setSuccess(
          "Cadastro realizado com sucesso! Verifique seu e-mail para confirmação."
        );

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Falha no cadastro");
      }
    } catch (err) {
      setError("Ocorreu um erro inesperado.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <S.GlobalStyle />
      <S.PageContainer>
        <S.AuthCard>
          <S.AuthTitle>Criar Conta</S.AuthTitle>
          <S.Form onSubmit={handleSubmit}>
            <S.InputWrapper>
              <S.IconWrapper>
                <User size={20} />
              </S.IconWrapper>
              <S.Input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.IconWrapper>
                <Mail size={20} />
              </S.IconWrapper>
              <S.Input
                type="email"
                placeholder="Endereço de E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.IconWrapper>
                <Lock size={20} />
              </S.IconWrapper>
              <S.Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="gray" />
                ) : (
                  <Eye size={20} color="gray" />
                )}
              </S.PasswordToggle>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.IconWrapper>
                <Lock size={20} />
              </S.IconWrapper>
              <S.Input
                type={showPassword ? "text" : "password"}
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </S.InputWrapper>

            <S.Button type="submit" disabled={isLoading}>
              {isLoading ? "Cadastrando..." : "Cadastrar"}
            </S.Button>
          </S.Form>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <S.AuthFooter>
            Já tem uma conta? <S.Link href="login">Entrar</S.Link>
          </S.AuthFooter>
        </S.AuthCard>
      </S.PageContainer>
    </>
  );
}
