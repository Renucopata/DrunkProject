import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';

const EmailsSend = ({ category }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/convoApis//category-companies/${category}`);
        if (response.status !== 200) {
          throw new Error('Failed to fetch user data');
        }
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [category]);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Empresa', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Telefono', accessor: 'phone' },
      { Header: 'NIT', accessor: 'nit' },
      { Header: 'Calificacion', accessor: 'rating' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    // Add pagination specific properties and methods
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data: userData }, usePagination);

  return (
    <div className="user-data-table">
      <h2>Covocatoria mandada a las siguientes empresas</h2>
      <table {...getTableProps()}>
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
          {page.map(row => {
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
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default EmailsSend;




