"use state";
import * as S from "./styles";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted", { name, email, password, confirmPassword });
  };

  return (
    <>
      <S.GlobalStyle />
      <S.PageContainer>
        <S.AuthCard>
          <S.AuthTitle>Create Account</S.AuthTitle>
          <S.Form onSubmit={handleSubmit}>
            <S.InputWrapper>
              <S.IconWrapper>
                <User size={20} />
              </S.IconWrapper>
              <S.Input
                type="text"
                placeholder="Full Name"
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
                placeholder="Email Address"
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </S.PasswordToggle>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.IconWrapper>
                <Lock size={20} />
              </S.IconWrapper>
              <S.Input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </S.InputWrapper>
          </S.Form>

          <S.Button type="submit">Sign Up</S.Button>

          <S.AuthFooter>
            Already have an account? <S.Link href="login">Sign In</S.Link>
          </S.AuthFooter>
        </S.AuthCard>
      </S.PageContainer>
    </>
  );
}
