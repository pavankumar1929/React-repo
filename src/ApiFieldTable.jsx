

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApiFieldTable = () => {
  const [apiData, setApiData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const itemsPerPage = 5;
  const maxPages = 3;

  const extractFields = (obj, prefix = '') => {
    let fields = {};
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      const fullKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(fields, extractFields(value, fullKey));
      } else {
        fields[fullKey] = String(value); // ensure string for searching
      }
    }
    return fields;
  };

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://api.restful-api.dev/objects');
        const json = await response.json();

        const flattenedData = json.map(item => extractFields(item));
        const allFields = new Set();
        flattenedData.forEach(item =>
          Object.keys(item).forEach(field => allFields.add(field))
        );

        const limitedData = flattenedData.slice(0, itemsPerPage * maxPages);
        setColumns([...allFields]);
        setApiData(limitedData);
      } catch (error) {
        console.error('Error fetching API data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  // Filter by search
  const filteredData = apiData.filter(row =>
    Object.values(row).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = React.useMemo(() => {
  let sortableItems = [...filteredData];
  if (sortConfig.key) {
    sortableItems.sort((a, b) => {
      const aVal = a[sortConfig.key] || '';
      const bVal = b[sortConfig.key] || '';

      const numA = parseFloat(aVal);
      const numB = parseFloat(bVal);

      const isNumA = !isNaN(numA);
      const isNumB = !isNaN(numB);

      if (isNumA && isNumB) {
        return numA - numB;
      }

      return aVal.toString().localeCompare(bVal.toString(), undefined, { sensitivity: 'base' });
    });
  }
  return sortableItems;
}, [filteredData, sortConfig]);


  const totalPages = Math.min(Math.ceil(sortedData.length / itemsPerPage), maxPages);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => setCurrentPage(pageNum);

  const goToPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleSort = (col) => {
  setSortConfig({ key: col, direction: 'asc' }); // always ascending
};


  // const getSortIcon = (col) => {
  //   if (sortConfig.key !== col) return '';
  //   return sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽';
  // };

  const getSortIcon = (col) => {
  if (sortConfig.key === col) {
    return sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽';
  }
  return ' ⇅'; // Default unsorted icon
};


  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">API Data Table (Sortable, Searchable, Paginated)</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Search any field..."
          className="form-control"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2">Loading data...</p>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  {columns.map(col => (
                   
                    <th
                    key={col}
                    onClick={() => handleSort(col)}
                    style={{ cursor: 'pointer' }}
>
                  {col}{getSortIcon(col)}
                   </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((row, i) => (
                    <tr key={i}>
                      {columns.map(col => (
                        <td key={col}>{row[col] || ''}</td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="text-center">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav className="mt-3">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={goToPrev}>Previous</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={goToNext}>Next</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default ApiFieldTable;

