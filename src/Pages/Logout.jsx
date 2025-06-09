// src/Pages/Logout.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate('/');
  }, [navigate]); // ✅ added 'navigate' as a dependency
 


  return null;
}

export default Logout;
