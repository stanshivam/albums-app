import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Row {
  [key: string]: any;
}

interface DataTableProps {
  columns: GridColDef[];
  rows: Row[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => {
  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default DataTable;
