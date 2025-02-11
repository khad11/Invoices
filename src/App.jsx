// r-r-d
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

//pages
import { Home, Product } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
