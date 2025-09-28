import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./components/Router/Router";
import { TodoContextProvider } from "./components/context/TodoContetxt";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContextProvider>
      <RouterProvider router={router} />
    </TodoContextProvider>
  </StrictMode>
);
