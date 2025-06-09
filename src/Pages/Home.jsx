

import React from 'react';

function Home() {
  return (
    <div>
      <h3>Welcome to pavankumar</h3>
      <img src="/Education.jpg" alt="Welcome" className="img-fluid mt-3" width = "80%" image='center'/>
    </div>
  );
}

export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const goToSyllabus = () => {
//     navigate('/syllabus');
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Welcome to the Home Page</h1>
//       <button className="btn btn-success mt-3" onClick={goToSyllabus}>
//         Go to Syllabus
//       </button>
//     </div>
//   );
// };

// export default Home;

