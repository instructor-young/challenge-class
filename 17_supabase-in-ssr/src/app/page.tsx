"use client";

import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickLogIn = () => {};
  const handleClickLogOut = () => {};

  const handleClickSignUp = async () => {
    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");

    const data = { email, password };

    const response = await fetch("http://localhost:3001/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const data2 = await response.json();

    console.log("data2", data2);
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/auth/me").then(async (response) => {
      if (response.status === 200) {
        const {
          data: { user },
        } = await response.json();
        setUser(user);
      }
    });
  }, []);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1>현재 로그인한 유저는</h1>
      {user ? user.email + "입니다" : "없습니다"}

      <hr className="my-10 w-full border-black" />

      <button className="button" onClick={handleClickLogIn}>
        로그인하기
      </button>
      <button className="button" onClick={handleClickLogOut}>
        로그아웃하기
      </button>

      <hr className="my-10 w-full border-black" />

      <input
        type="text"
        className="input"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button mt-3" onClick={handleClickSignUp}>
        회원가입하기
      </button>
    </main>
  );
}
