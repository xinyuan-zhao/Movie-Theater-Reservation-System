import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'customer_id', headerName: 'Customer_Id', width: 100 },
  { field: 'password', headerName: 'Password', editable: true, width: 500 },
  { field: 'email', headerName: 'Email', editable: true, width: 300 },
];

export default function CustomerDataTable( {rows} ) {
  return (
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 14]}
        checkboxSelection
        getRowId={(row) => row.customer_id}
      />
  );
}