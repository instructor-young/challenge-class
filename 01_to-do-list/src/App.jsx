import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => setTodos((prevTodos) => [...prevTodos, newTodo]);
  const deleteTodo = (todoId) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  const toggleIsDone = (todoId) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div id="app">
      <Form addTodo={addTodo} />
      <hr />
      <Todos
        title="Working"
        todos={workingTodos}
        deleteTodo={deleteTodo}
        toggleIsDone={toggleIsDone}
      />
      <Todos
        title="Done"
        todos={doneTodos}
        deleteTodo={deleteTodo}
        toggleIsDone={toggleIsDone}
      />
    </div>
  );
}

export default App;
