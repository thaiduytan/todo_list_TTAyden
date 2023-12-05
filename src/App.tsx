import ContentTodo from "./component/ContentTodo/ContentTodo";
import Heading from "./component/Heading/Heading";

function App() {
  return (
    <>
      <div className="max-w-md p-4 mx-auto mt-8 bg-white rounded-md shadow-md">
        <Heading title="Todo App" />
        <ContentTodo />
      </div>
    </>
  );
}

export default App;
