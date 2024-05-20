import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostsListPage from "../pages/PostsListPage";
import postsListPageLoader from "../pages/PostsListPage/PostsListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postsListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
