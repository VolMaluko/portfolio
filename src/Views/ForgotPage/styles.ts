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
  background: linear-gradient(135deg, rgba(126, 87, 194, 0.2), #7e57c2, white);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  padding: 1rem;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const AuthTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  max-width: 100%;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  border-radius: 0.5rem;
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

export const IconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 62%;
  transform: translateY(-50%);
  color: #6b7280;
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem;
  background-color: #7e57c2;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a4fa3;
  }
`;

export const AuthFooter = styled.div`
  margin-top: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Link = styled.a`
  color: #7e57c2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  background: #ffe6e6;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
`;

export const SuccessMessage = styled.p`
  color: green;
  background: #e6ffe6;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
`;
