import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const status = isLoggedIn ? "로그인" : "로그아웃";

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      현재 {status} 상태입니다.
    </div>
  );
}

export default Display;
