import React from 'react';
import data from '../data/staticData.json';

function Icon3Page() {
  return (
    <div>
      <h4>Data Table for Icon 3</h4>
      <table className="table table-bordered ,table-dark">
        <thead>
          <tr class="bg-color">
            <th>ID</th><th>Name</th><th>Info</th>
          </tr>
        </thead>
        <tbody>
          {data.icon3.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td><td>{item.name}</td><td>{item.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Icon3Page;
