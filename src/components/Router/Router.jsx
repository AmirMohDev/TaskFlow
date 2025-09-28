import { createBrowserRouter, Route, Router } from "react-router";
import Intro from "../../pages/Intro/Intro";
import Todo from "../../pages/Todo/Todo";

const router = createBrowserRouter([
  { path: "/", element: <Intro /> },
  { path: "/Todo", element: <Todo /> },
]);
export default router;
