import React from "react";

const InputAdd = ({
  inputRef,
  onAddTodo,
}: {
  inputRef: React.LegacyRef<HTMLInputElement>;
  onAddTodo: () => void;
}) => {
  return (
    <>
      <div className="flex mb-5 gap-x-5">
        <input
          ref={inputRef}
          type="text"
          className="w-full p-2 mr-2 border border-gray-300 rounded-md"
          placeholder="Add a new todo..."
        />
        <button
          onClick={onAddTodo}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          disabled={false}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default InputAdd;
