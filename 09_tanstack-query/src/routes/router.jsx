import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import TodoPage from "../pages/TodoPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
      { path: "/todo", element: <TodoPage /> },
    ],
  },
]);

export default router;
