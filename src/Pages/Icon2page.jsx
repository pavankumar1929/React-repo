import React from 'react';
import data from '../data/staticData.json';

function Icon2Page() {
  return (
    <div class="surendra">
      <h4>Data Table for Icon 2</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Info</th>
          </tr>
        </thead>
        <tbody>
          {data.icon2.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td><td>{item.name}</td><td>{item.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Icon2Page;
