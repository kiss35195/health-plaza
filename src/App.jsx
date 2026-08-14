import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Order from "./features/order/Order";
import Menu from "./features/menu/Menu";
import Doit from "./features/menu/Doit";
import Cart from "./features/cart/Cart";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/order/:orderId", element: <Order /> },
      {
        path: "/menu",
        element: <Menu />,
      },
      { path: "/doit", element: <Doit /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
