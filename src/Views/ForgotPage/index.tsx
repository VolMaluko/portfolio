import React, { useState } from "react";
import * as S from "./styles";
import { Mail } from "lucide-react";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const response = await fetch("/api/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess("E-mail de recuperação enviado com sucesso!");
    } else {
      setError(data.message || "Erro ao enviar e-mail de recuperação");
    }
  };

  return (
    <>
      <S.GlobalStyle />
      <S.PageContainer>
        <S.AuthCard>
          <S.AuthTitle>Reset Password</S.AuthTitle>
          <S.Form onSubmit={handleSubmit}>
            <S.InputWrapper>
              <S.IconWrapper>
                <Mail size={20} />
              </S.IconWrapper>
              <S.Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </S.InputWrapper>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {success && <S.SuccessMessage>{success}</S.SuccessMessage>}
            <S.Button type="submit">Send Reset Link</S.Button>
          </S.Form>

          <S.AuthFooter>
            Remember your password? <S.Link href="/login">Back to Login</S.Link>
          </S.AuthFooter>
        </S.AuthCard>
      </S.PageContainer>
    </>
  );
}
