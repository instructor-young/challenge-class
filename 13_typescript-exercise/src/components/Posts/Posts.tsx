import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint).then((response) => response.data),
  });

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          [{post.id}] {post.title}
        </li>
      ))}
    </ol>
  );
}

export default Posts;
