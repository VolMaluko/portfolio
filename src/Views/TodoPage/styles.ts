import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(135deg,rgb(51, 111, 202) 0%,rgb(199, 243, 186) 100%);
        color: ${({ theme }) => theme.color};
        margin: 0;
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.taskBackground};
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 750px;
  max-width: 100%;
  min-height: 40%;
  transition: background-color 0.3s ease;
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.deleteBackground};
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  height: 100px;
  max-width: 100%;
  transition: background-color 0.3s ease;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "#6c757d" : "#343a40"};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.background === "#ffffff" ? "#5a6268" : "#495057"};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const TaskInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.buttonBackground};
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const TaskList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.taskBackground};
  border-radius: 8px;
  cursor: grab;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.taskHover};
  }
`;

export const TaskCheckbox = styled.input`
  margin-right: 10px;
`;

export const TaskText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed, theme }) => (completed ? "#888888" : theme.color)};
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.deleteButton};
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.deleteButtonHover};
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }
`;

export const DeleteAllButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-left: 40px;
  align-self: center;
  cursor: pointer;
  transition: background-color 0.3s;
  max-height: 45px;
  &:hover {
    background-color: #c82333;
  }
`;

export const DeleteSelectedButton = styled.button`
  background-color: #dc3545;
  color: white;
  align-self: center;
  border: none;
  max-height: 45px;
  border-radius: 8px;
  margin-right: 40px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;
