import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/Routes';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './styles/Main';
import GlobalStyled from './styles/GlobalStyled';

/*
  <GlobalStyled />
      <ToastContainer autoClose={3000} className="toast-container" />
*/

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Main>
        <Routes />
      </Main>
      <Footer />
      <GlobalStyled />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
