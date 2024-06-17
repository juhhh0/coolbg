import ReactDOM from "react-dom/client";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Effect from "./pages/Effect.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Effect />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
