
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SyllabusPage = () => {
const syllabusData = [
{
  title: 'Mathematics',
  img: 'mathematics.avif',
  description: 'Topics include Algebra, Calculus, Geometry, and Trigonometry.',
},

{
  title: 'Science',
  img:'kumar.avif',
  description: 'Covers Physics, Chemistry, Biology and Environmental Science.',
},
  {
    title: 'English',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60',
    description: 'Includes Grammar, Comprehension, Writing Skills, and Literature.',
  },
  {
    title: 'Social Studies',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
    description: 'Covers History, Geography, Economics, and Civics.',
  },

  {
    title: 'Computer Science',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60',
    description: 'Includes Programming, Networking, and Computer Basics.',
  },
  {
    title: 'General Knowledge',
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=60',
    description: 'Covers current affairs, world facts, and logical reasoning.',
  },
];

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Syllabus Overview</h2>
      <div className="row">
        {syllabusData.map((subject, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img src={subject.img} className="card-img-top" alt={subject.title} />
              <div className="card-body">
                <h5 className="card-title">{subject.title}</h5>
                <p className="card-text">{subject.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;


