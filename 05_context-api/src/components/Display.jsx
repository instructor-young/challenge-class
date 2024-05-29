import React from "react";
import { useAuth } from "../contexts/auth.context";

function Display() {
  const { isLoggedIn } = useAuth();

  console.log("디스플레이 리렌더링");

  return <div>로그인 여부 ({isLoggedIn.toString()})</div>;
}

export default Display;
