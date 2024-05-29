import React from "react";
import useLoginStore from "../zustand/login.store";

function Button() {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  // const { logIn, logOut } = useLoginStore(
  //   useShallow((state) => ({
  //     logIn: state.logIn,
  //     logOut: state.logOut,
  //   }))
  // );

  const { logIn, logOut } = useLoginStore((state) => state.functions);

  console.log("버튼 리렌더링");

  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
}

export default Button;
