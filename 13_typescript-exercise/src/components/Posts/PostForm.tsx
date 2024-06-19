import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const titleElRef = useRef<HTMLInputElement>(null);
  const bodyElRef = useRef<HTMLTextAreaElement>(null);
  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handleClickButton = async () => {
    const title = titleElRef.current?.value;
    const body = bodyElRef.current?.value;

    if (!title || !body) return alert("데이터를 잘 준비해 주세요.");

    const data = { title, body };

    await createPost(data);
  };

  return (
    <div className="flex flex-col p-4">
      <input
        ref={titleElRef}
        className="border border-black"
        placeholder="제목"
      />
      <textarea
        ref={bodyElRef}
        className="border border-black"
        placeholder="내용"
      />

      <button onClick={handleClickButton} className="border border-black">
        포스트 생성하기
      </button>
    </div>
  );
}

export default PostForm;
