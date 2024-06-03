import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      return axios.post(ENDPOINT, { value: variables });
    },
  });

  const handleClickButton = async () => {
    mutate(inputRef.current.value, { onSuccess: () => alert("성공했다고~!") });
  };

  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        className="border"
        disabled={isPending}
      />
      <button
        onClick={handleClickButton}
        className="bg-black text-white"
        disabled={isPending}
      >
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
