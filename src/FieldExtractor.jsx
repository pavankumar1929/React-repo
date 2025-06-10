import React, { useEffect, useState } from 'react';

const FieldExtractor = () => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);

  // Recursive function to extract all nested fields
  const extractFields = (obj, prefix = '') => {
    const result = [];

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const fieldKey = prefix ? `${prefix}.${key}` : key;

        if (value && typeof value === 'object' && !Array.isArray(value)) {
          result.push(...extractFields(value, fieldKey));
        } else {
          result.push(fieldKey);
        }
      }
    }

    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.restful-api.dev/objects');
        const json = await response.json();

        const fieldSet = new Set();

        json.forEach(item => {
          const fields = extractFields(item);
          fields.forEach(field => fieldSet.add(field));
        });

        setFields([...fieldSet].sort());
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Extracted API Fields</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {fields.map(field => (
            <li key={field} className="list-group-item">
              {field}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FieldExtractor;
