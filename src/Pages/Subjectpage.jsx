import React, { useState } from 'react';

function Subjectpage() {
  const [subjects, setSubjects] = useState([]);
  const [form, setForm] = useState({
    name: '',
    code: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubject = {
      id: subjects.length + 1,
      name: form.name,
      code: form.code,
      description: form.description
    };

    setSubjects([...subjects, newSubject]);
    setForm({ name: '', code: '', description: '' }); // Clear form
  };

  return (
    <div>
      <h3>Add New Subject</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row mb-3">
          <div className="col">
            <input class="bg-color"
              type="text"
              name="name"
              className="form-control"
              placeholder="Subject Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="code"
              className="form-control"
              placeholder="Subject Code"
              value={form.code}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>

      <h4>Subjects Table</h4>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.name}</td>
              <td>{subject.code}</td>
              <td>{subject.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subjectpage;
