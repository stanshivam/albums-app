import React from 'react';
import { render } from '@testing-library/react';
import { DataTable } from '../DataTable';
import '@testing-library/jest-dom/extend-expect';


describe('DataTable', () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 35 },
  ];

  it('renders without error', () => {
    render(<DataTable columns={columns} rows={rows} />);
  });

  it('displays the correct number of columns and rows', () => {
    const { getAllByRole } = render(<DataTable columns={columns} rows={rows} />);
    const columnHeaders = getAllByRole('columnheader');
    const dataRows = getAllByRole('row');

    expect(columnHeaders).toHaveLength(columns.length);
    expect(dataRows).toHaveLength(rows.length + 1); // Include header row
  });

  it('displays the correct column headers', () => {
    const { getAllByRole } = render(<DataTable columns={columns} rows={rows} />);
    const columnHeaders = getAllByRole('columnheader');

    columns.forEach((column, index) => {
      expect(columnHeaders[index]).toHaveTextContent(column.headerName);
    });
  });

  it('displays the correct data in rows', () => {
    const { getAllByRole } = render(<DataTable columns={columns} rows={rows} />);
    const dataRows = getAllByRole('row');

    rows.forEach((row, rowIndex) => {
      const cells = dataRows[rowIndex + 1].querySelectorAll('[role="cell"]');
      expect(cells[0]).toHaveTextContent(String(row.id));
      expect(cells[1]).toHaveTextContent(row.name);
      expect(cells[2]).toHaveTextContent(String(row.age));
    });
  });
});
