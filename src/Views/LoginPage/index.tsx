"use client";
import { useState } from "react";
import * as S from "./styles";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };
  return (
    <>
      <S.GlobalStyle />
      <S.PageContainer>
        <S.LoginCard>
          <S.Title>Welcome Back</S.Title>
          <S.Subtitle>Sign in to continue</S.Subtitle>

          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="email">Email Address</S.Label>
              <S.Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="password">Password</S.Label>
              <S.InputWrapper>
                <S.Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <S.PasswordToggleButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </S.PasswordToggleButton>
              </S.InputWrapper>
            </S.FormGroup>

            <S.RememberForgotContainer>
              <S.RememberCheckbox>
                <S.Checkbox type="checkbox" id="remember" />
                <S.RememberLabel htmlFor="remember">
                  Remember me
                </S.RememberLabel>
              </S.RememberCheckbox>
              <S.ForgotPasswordLink href="/forgot">
                Forgot password?
              </S.ForgotPasswordLink>
            </S.RememberForgotContainer>
          </S.Form>
          <S.SubmitButton type="submit">Sign In</S.SubmitButton>
          <S.SignupText>
            Don t have an account?{" "}
            <S.SignupLink href="/signup">Sign up</S.SignupLink>
          </S.SignupText>
        </S.LoginCard>
      </S.PageContainer>
    </>
  );
}
