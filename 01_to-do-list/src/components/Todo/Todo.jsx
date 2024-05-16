function Todo({ todo, deleteTodo, toggleIsDone }) {
  const { title, content, isDone } = todo;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      <button onClick={() => toggleIsDone(todo.id)}>
        {isDone ? "취소" : "완료"}
      </button>
    </div>
  );
}

export default Todo;
