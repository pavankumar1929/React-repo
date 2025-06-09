
// Pages/TimetablePage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const TimeTablePage = () => {
  const timetable = [
    { day: 'Monday', subjects: ['Math', 'Science', 'English'] },
    { day: 'Tuesday', subjects: ['Computer', 'English', 'Social'] },
    { day: 'Wednesday', subjects: ['Math', 'Science', 'GK'] },
    { day: 'Thursday', subjects: ['English', 'Math', 'Social'] },
    { day: 'Friday', subjects: ['Science', 'Computer', 'English'] },
  ];

  return (
    <motion.div
      className="container-fluid px-3 px-md-5 py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-4">📅 Weekly Timetable</h2>
      <div className="table-responsive">
        <motion.table
          className="table table-bordered table-hover table-sm text-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <thead className="table-dark">
            <tr>
              <th>Day</th>
              <th>Period 1</th>
              <th>Period 2</th>
              <th>Period 3</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <td>{row.day}</td>
                {row.subjects.map((subject, idx) => (
                  <td key={idx}>{subject}</td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
};

export default TimeTablePage;


