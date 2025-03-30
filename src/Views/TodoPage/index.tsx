import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";

const lightTheme = {
  background: "#ffffff",
  color: "#333",
  taskBackground: "#e7e7e7",
  taskHover: "#f0f0f0",
  deleteBackground: "#ffffff",
};

const darkTheme = {
  background: "#343a40",
  color: "#f8f9fa",
  taskBackground: "#495057",
  taskHover: "#6c757d",
  deleteBackground: "#08090a57",
};

export default function TodoPage() {
  const [tasks, setTasks] = useState<
    { text: string; completed: boolean; selected: boolean }[]
  >([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [draggedTaskIndex, setDraggedTaskIndex] = useState<number | null>(null);

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleDeleteSelected = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.selected));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addTask = (task: string) => {
    if (task) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: task, completed: false, selected: false },
      ]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    if (draggedTaskIndex !== null) {
      const newTasks = [...tasks];
      const [draggedTask] = newTasks.splice(draggedTaskIndex, 1);
      newTasks.splice(index, 0, draggedTask);
      setTasks(newTasks);
      setDraggedTaskIndex(null);
    }
  };

  const allowDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
  };

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleTaskSelection = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, selected: !task.selected } : task
      )
    );
  };

  const handleDragStart = (index: number) => {
    setDraggedTaskIndex(index);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <S.GlobalStyle />
      <S.Container>
        <S.Header>
          <h1>Todo List</h1>
          <S.ToggleButton onClick={toggleTheme}>Toggle Theme</S.ToggleButton>
        </S.Header>
        <S.TaskInput
          type="text"
          placeholder="Adicione uma nova tarefa..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
        <S.DeleteContainer>
          <S.DeleteAllButton onClick={handleDeleteAll}>
            Apagar Todas as Tarefas
          </S.DeleteAllButton>
          <S.DeleteSelectedButton onClick={handleDeleteSelected}>
            Deletar Selecionados
          </S.DeleteSelectedButton>
        </S.DeleteContainer>
        <S.TaskList onDragOver={allowDrop}>
          {tasks.map((task, index) => (
            <S.TaskItem
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDrop={(e) => handleDrop(e, index)}>
              <S.TaskCheckbox
                type="checkbox"
                checked={task.selected}
                onChange={() => toggleTaskSelection(index)}
              />
              <S.TaskText completed={task.completed}>{task.text}</S.TaskText>
              <S.StyledDeleteButton onClick={() => deleteTask(index)}>
                X
              </S.StyledDeleteButton>
            </S.TaskItem>
          ))}
        </S.TaskList>
      </S.Container>
    </ThemeProvider>
  );
}
