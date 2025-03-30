import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(126, 87, 194, 0.2), #7e57c2, white);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #4b5563;
  margin-top: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  max-width: 100%;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const RememberLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  padding-left: 0.4rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  color: #374151;
  &:focus {
    outline: none;
    border-color: #7e57c2;
    box-shadow: 0 0 0 3px rgba(126, 87, 194, 0.2);
    color: #374151 !important;
    background-color: white;
  }
  &:-webkit-autofill {
    background-color: white !important;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: #374151 !important;
    caret-color: #374151 !important;
  }
`;

export const PasswordToggleButton = styled.button`
  position: absolute;
  top: 65%;
  right: 0.75rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
`;

export const RememberForgotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RememberCheckbox = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  color: #7e57c2;
  border-color: #d1d5db;
  border-radius: 0.25rem;
`;

export const ForgotPasswordLink = styled.a`
  color: #7e57c2;
  font-size: 0.875rem;

  &:hover {
    color: #6a34be;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 1.3rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #7e57c2;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #6a34be;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(126, 87, 194, 0.2);
  }
`;

export const SignupText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  color: #4b5563;
  font-size: 0.875rem;
`;

export const SignupLink = styled.a`
  color: #7e57c2;
  font-weight: 500;

  &:hover {
    color: #6a34be;
  }
`;
