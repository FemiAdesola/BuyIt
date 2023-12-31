import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3 mt-5">
        <Container className="mt-4">
          {/* <h1>Welcome to buyIt shopping center</h1> */}
        <Outlet/>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App