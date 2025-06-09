

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Icon1Page from './Pages/Icon1page';
import Icon2Page from './Pages/Icon2page';
import Icon3Page from './Pages/Icon3page';
// import Logout from './Pages/Logout';
import Logout from './Pages/Logout';


import Layout from './components/Layout';
import Subjectpage from './Pages/Subjectpage';
import ContactForm from './Pages/ContactForm';
import PaypalPage from './Pages/PayPalPage'; // Only keep this one
import SyllabusPage from './Pages/SyllabusPage'; // ✅ Newly added
import TimetablePage from './Pages/TimeTablePage';
import LibraryPage from './Pages/LibraryPage';
import './styles.css';

function App() {
  return (

<BrowserRouter>
  <Routes>
    {/* Public route for login */}
    <Route path="/" element={<Login />} />

    {/* Protected routes under layout */}
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="icon1" element={<Icon1Page />} />
      <Route path="icon2" element={<Icon2Page />} />
      <Route path="icon3" element={<Icon3Page />} />
      <Route path="logout" element={<Logout />} />
      <Route path="subjectpage" element={<Subjectpage />} />
      <Route path="ContactForm" element={<ContactForm />} />
      <Route path="paypalPage" element={<PaypalPage />} />
      <Route path="syllabusPage" element={<SyllabusPage />} />
      <Route path="timetable" element={<TimetablePage />} />
      <Route path="library" element={<LibraryPage />} />
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;






