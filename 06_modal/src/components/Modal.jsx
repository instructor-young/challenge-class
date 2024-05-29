import React from "react";
import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, content }) {
  const modal = useModal();

  return (
    <Backdrop>
      <article className="modal">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
