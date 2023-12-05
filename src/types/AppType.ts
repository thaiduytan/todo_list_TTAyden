export type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number }
  | { type: "TOGGLE"; id: number };

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export interface ListTodoProps {
  todos: Todo[];
  onRemoveTodo: (idTodo: number) => void;
  onToggleTodo: (idTodo: number) => void;
}
