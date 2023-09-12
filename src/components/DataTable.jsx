import React, { useState, useEffect } from 'react';

export function DataTable() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    console.log('Fetching data...');
    fetch('./scraped_data.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log('Data fetched successfully:', text);

        const rows = text.split('\n');

        const parsedData = rows.map((row) => {
          const keyValuePairs = row.split(', ');
          const person = {};
          keyValuePairs.forEach((pair) => {
            const [key, value] = pair.split(': ');
            person[key] = value;
          });
          return person;
        });
        console.log('Parsed data:', parsedData);
       
        setData(parsedData);
      })
      .catch((error) => {
        console.error('Error reading the data file:', error);
      });
  }, []);

  const sortData = (column) => {
    if (column === sortedColumn) {
      
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };

  
  const filteredData = data.filter((person) =>
    Object.values(person).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

const sortedData = [...filteredData].sort((a, b) => {
  if (sortedColumn) {
    const aValue = a[sortedColumn] || '';
    const bValue = b[sortedColumn] || ''; 

    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  }
  return 0;
});


  console.log('Rendering component with data:', data);

  return (
    <div className='text-white mt-20 flex flex-col items-center'>
      <div className='mb-4 text-black'>
        <input
          type='text'
          placeholder='Search...'
          className='p-2 border rounded mb-4'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='w-full max-w-screen-lg overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-800 text-gray-200'>
                <th className='p-4'
                 > ID
                </th>
                <th className='p-4 cursor-pointer' onClick={() => sortData('First Name')}>
                  First Name {sortedColumn === 'First Name' && (
                    <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
                <th className='p-4 cursor-pointer' onClick={() => sortData('Last Name')}>
                  Last Name {sortedColumn === 'Last Name' && (
                    <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
                <th className='p-4 cursor-pointer' onClick={() => sortData('Nick Name')}>
                  Nick Name {sortedColumn === 'Nick Name' && (
                    <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
                <th className='pr-36 cursor-pointer' onClick={() => sortData('Team')}>
                  Team {sortedColumn === 'Team' && (
                    <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((person, index) => (
              <tr key={index} className='bg-white text-gray-800'>
                <td className='pl-6 pb-4 pt-4'>{person.ID}</td>
                <td className='pl-8 pb-4 pt-4'>{person['First Name']}</td>
                <td className='pl-16 pb-4 pt-4'>{person['Last Name']}</td>
                <td className='pl-16 pb-4 pt-4'>{person['Nick Name']}</td>
                <td className='pl-12 pb-4 pt-4'>{person.Team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}