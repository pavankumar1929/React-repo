
// Pages/LibraryPage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const books = [
  {
    title: 'Algebra Basics',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60',
    description: 'Learn the foundations of Algebra with examples.',
  },
  {
    title: 'Physics for Beginners',
    img: 'kumar.avif',
    description: 'Explore fundamental concepts of Physics.',
  },
  {
    title: 'World History',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=60',
    description: 'Dive into major historical events around the globe.',
  },
];
const LibraryPage = () => {
  return (
    <motion.div
      className="container-fluid py-4 px-3 px-md-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-4">📚 Library Resources</h2>
      <div className="row justify-content-center">
        {books.map((book, index) => (
          <motion.div
            className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <div className="card h-100 shadow-sm">
              <motion.img
                src={book.img}
                className="card-img-top"
                alt={book.title}
                style={{ objectFit: 'cover', height: '200px' }}
                whileHover={{ scale: 1.03 }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <button className="btn btn-primary mt-auto">Read More</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LibraryPage;
