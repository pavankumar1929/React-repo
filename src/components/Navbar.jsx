// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">MyApp</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/home">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/syllabus">Syllabus</Link> {/* ✅ Bootstrap link */}
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/ContactForm">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/home">MyApp</Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/syllabus">Syllabus</Link>
            <Link className="nav-link" to="/ContactForm">Contact</Link>
            <Link className="nav-link" to="/logout">Logout</Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

