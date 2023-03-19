import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import './index.css'

function DataTable({ data, columns }) {
  const [filterInput, setFilterInput] = useState('');

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value)
  }

  const filteredData = useMemo(() => {
    if (!filterInput) {
      return data
    }

    return data.filter((item) => {
      return Object.values(item).some((value) => {
        return String(value).toLowerCase().includes(filterInput.toLowerCase())
      })
    })
  }, [data, filterInput])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: filteredData,
  });

  return (
    <div>
      <div>
      <div className='h4'><h4>Todos</h4></div>
      <div className="search-container">
        <input 
          className='search-input-styling'
          type="text"
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="   Search.... "
        />
      </div>
      </div>
      <table {...getTableProps()} className="data-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;


