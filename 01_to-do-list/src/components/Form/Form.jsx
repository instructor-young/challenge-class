import { useRef, useState } from "react";
import "./Form.css";

function Form({ addTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleInputRef = useRef(null);

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleChangeContent = (e) => {
    const value = e.target.value;
    setContent(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: Date.now(), title, content, isDone: false };
    addTodo(newTodo);

    setTitle("");
    setContent("");

    titleInputRef.current.focus();
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title-input">제목</label>
        <input
          id="title-input"
          autoFocus
          ref={titleInputRef}
          type="text"
          placeholder="제목을 입력해 주세요"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div>
        <label htmlFor="content-input">내용</label>
        <input
          id="content-input"
          type="text"
          placeholder="내용을 입력해 주세요"
          value={content}
          onChange={handleChangeContent}
        />
      </div>
      <button type="form">추가하기</button>
    </form>
  );
}

export default Form;
