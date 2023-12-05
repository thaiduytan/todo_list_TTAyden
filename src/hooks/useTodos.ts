import React from "react";
import { ActionType, Todo } from "../types/Apptype";

const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false,
        },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      throw new Error("");
  }
};

export default function useTodos(
  initialState: Todo[],
  inputRef?: React.LegacyRef<HTMLInputElement>
): {
  todos: Todo[];
  onRemoveTodo: (todoId: number) => void;
  onAddTodo: () => void;
  onToggleTodo: (todoId: number) => void;
} {
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : initialState;
  const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);

  // Lưu các công việc vào localStorage mỗi khi chúng thay đổi
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onRemoveTodo = (todoId: number) => {
    dispatch({
      type: "REMOVE",
      id: todoId,
    });
  };

  const onAddTodo = () => {
    // Truy cập giá trị của ô input
    if (inputRef?.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
      // Cập nhật localStorage sau khi thêm một công việc mới
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const onToggleTodo = (todoId: number) => {
    dispatch({
      type: "TOGGLE",
      id: todoId,
    });
  };

  return {
    todos,
    onRemoveTodo,
    onAddTodo,
    onToggleTodo
  };
}
