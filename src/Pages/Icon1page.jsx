import React from 'react';
import data from '../data/staticData.json';


function Icon1Page() {
  return (
    <div class="table table-hover">
      <h4>Data Table for Icon 1</h4>
      {/* <table class="table table-bordered .table-hover .table-primary"> */}
      <table class="table table-hover">

        <thead>
          <tr class="he">
            <th>ID</th><th>Name</th><th>Info</th>
          </tr>
        </thead>
        <tbody>
          {data.icon1.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td><td>{item.name}</td><td>{item.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Icon1Page;









