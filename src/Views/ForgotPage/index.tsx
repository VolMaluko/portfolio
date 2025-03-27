import React, { useState } from "react";
import * as S from "./styles";
import { Mail } from "lucide-react";

export default function ForgotPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Forgot Password submitted", { email });
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
          </S.Form>

          <S.Button type="submit">Send Reset Link</S.Button>

          <S.AuthFooter>
            Remember your password? <S.Link href="/login">Back to Login</S.Link>
          </S.AuthFooter>
        </S.AuthCard>
      </S.PageContainer>
    </>
  );
}
