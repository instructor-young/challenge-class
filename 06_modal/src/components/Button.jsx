import React from "react";
import { useModal } from "../contexts/modal.context";

function Button() {
  const modal = useModal();
  console.log("리렌더링");

  const handleClickButton = () => {
    modal.open({ title: "샘플 제목", content: "샘플 콘텐츠" });
  };
  return <button onClick={handleClickButton}>모달 띄우기</button>;
}

export default Button;
