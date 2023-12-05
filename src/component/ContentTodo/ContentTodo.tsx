import React from "react";
import InputAdd from "../InputAdd/InputAdd";
import { ListTodoProps } from "../../types/Apptype";
import useTodos from "../../hooks/useTodos";

// const initialState: Todo[] = [];
const ContentTodo = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { todos, onRemoveTodo, onAddTodo, onToggleTodo } = useTodos(
    [],
    inputRef
  );
  return (
    <>
      <div className="">
        <InputAdd inputRef={inputRef} onAddTodo={onAddTodo} />
        <ListTodo
          todos={todos}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
        />
      </div>
    </>
  );
};

const ListTodo: React.FC<ListTodoProps> = ({
  todos,
  onRemoveTodo,
  onToggleTodo,
}) => {
  console.log(todos);
  
  return (
    <div className="mb-5">
      {todos &&
        todos.map((todo) => (
          <div
            className={`flex items-center justify-between p-2 border ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
            key={todo.id}
          >
            <span>{todo.text}</span>
            <div>
              <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
              />
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      {todos.length === 0 && <div className="font-bold text-red-400">Bạn không có bất kỳ Todo nào.</div>}
    </div>
  );
};
export default ContentTodo;
