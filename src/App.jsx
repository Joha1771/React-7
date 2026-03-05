import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products/Products";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Components/Home/Home";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products/:id",
        Component: Products,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
