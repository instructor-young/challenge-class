import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostForm from "./components/Posts/PostForm";
import Posts from "./components/Posts/Posts";
import queryClient from "./react-query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostForm />
      <hr />
      <Posts />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
