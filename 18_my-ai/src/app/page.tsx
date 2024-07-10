"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleClickTalk = async () => {
    const res = await fetch("http://localhost:3001/api/talk", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
    const { response } = await res.json();
    setResponse(response);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Link href="/posts">포스트 목록</Link>

      <h1 className="text-xl font-semibold">내 AI 여자친구와 대화하기</h1>

      <textarea
        className="border border-black w-full max-w-sm mt-10 p-1.5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="border px-4 py-2 border-black rounded text-sm mt-3 bg-white hover:brightness-90 active:brightness-75"
        onClick={handleClickTalk}
      >
        위 내용으로 대화하기
      </button>

      {/* <img src={response.url} /> */}
      <p className="mt-10">{response}</p>
    </main>
  );
}
