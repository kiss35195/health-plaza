import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Home from "./pages/Home";
// 2026/08/20 用lazy把bundle變小加速載入 by kiss
// import Order, { loader as orderLoader } from "./features/order/Order";
// import Menu from "./features/menu/Menu";
// import Doit from "./features/menu/Doit";
// import Cart from "./features/cart/Cart";
// import Contact from "./pages/Contact";
const Order = lazy(() => import("./features/order/Order"));
const Menu = lazy(() => import("./features/menu/Menu"));
const Doit = lazy(() => import("./features/menu/Doit"));
const Cart = lazy(() => import("./features/cart/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
import { getRecipes, getOrder } from "./services/apiHealthPlaza";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    // 2026/08/20 初始進入或重整等太久時顯示 by kiss
    hydrateFallbackElement: <Loader />,
    loader: getRecipes,
    id: "recipes-data",
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        // 2026/08/20 直接處理loader by kiss
        // loader: orderLoader
        loader: ({ params }) => getOrder(params.orderId),
      },
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
