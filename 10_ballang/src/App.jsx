import { RouterProvider } from "react-router-dom";
import "./App.css";
import QueryProvider from "./query/QueryProvider";
import router from "./routes/router";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
