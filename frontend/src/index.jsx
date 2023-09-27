import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/styles/bootstrap.custom.css";
import './index.css';
import App from './App';

import HomeScreen from './Pages/HomeScreen';
import ProductScreen from "./Pages/ProductScreen";
import CartScreen from './Pages/CartScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

