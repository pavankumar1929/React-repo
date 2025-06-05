import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Icon1Page from './Pages/Icon1page';
import Icon2Page from './Pages/Icon2page';
import Icon3Page from './Pages/Icon3page';
import Logout from './Pages/Logout';
import Layout from './components/Layout';
import Subjectpage from './Pages/Subjectpage';
import ContactForm from './Pages/ContactForm';
import './styles.css';
import PaypalPage from './Pages/PayPalPage'; // ✅ CORRECT

import PayPalPage from './Pages/PayPalPage';

// Inside your Routes
<Route path="paypal" element={<PayPalPage />} />







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="icon1" element={<Icon1Page />} />
          <Route path="icon2" element={<Icon2Page />} />
          <Route path="icon3" element={<Icon3Page />} />
          <Route path="logout" element={<Logout />} />
          <Route path="subjectpage" element={<Subjectpage />} />
           <Route path="ContactForm" element={<ContactForm />} />
           <Route path="paypalPage" element={<PaypalPage />} />




        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;





