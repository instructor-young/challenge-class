import Todo from "../Todo";

function Todos({ title, todos, deleteTodo, toggleIsDone }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              toggleIsDone={toggleIsDone}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Todos;
