import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import store from "./Redux/store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/styles/bootstrap.custom.css";
import "./index.css";
import App from "./App";

import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";
import CartScreen from "./Pages/CartScreen";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import ShippingScreen from "./Pages/ShippingScreen";
import PrivateRoute from "./Components/PrivateRoute";
import PaymentScreen from "./Pages/PaymentScreen";
import PlaceOrderScreen from "./Pages/PlaceOrderScreen";
import OrderScreen from "./Pages/OrderScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import AdminRoute from "./Components/AdminRoute";
import { OrderAdminPage } from "./Pages/AdminPage/OrderAdminPage";
import ProductAdminPage from "./Pages/AdminPage/ProductAdminPage";
import EditProductByAdminPage from "./Pages/AdminPage/EditProductByAdminPage";
import UserAdminPage from "./Pages/AdminPage/UserAdminPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderAdminPage />} />
        <Route path="/admin/productlist" element={<ProductAdminPage />} />
        <Route path="/admin/product/:id/edit" element={<EditProductByAdminPage />} />
        <Route path="/admin/userlist" element={<UserAdminPage />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
