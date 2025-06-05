import React from 'react';


 function Header() {
  const username = localStorage.getItem('username');

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark border-bottom">
<img src="/logoed.png" alt="Logo" width="90" />
       <div className="me-3 text-white font-size 2rem">Welcome {username}</div> 
      
      {/* {<div className="me-3">Welcome {username}</div> } */}
    </header>
  );
 }

export default Header;

