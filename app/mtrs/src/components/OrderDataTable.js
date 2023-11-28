import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'payment_id', headerName: 'Payment_Id', width: 100 },
  { field: 'card_type', headerName: 'Card_Type', editable: true, width: 500 },
  { field: 'ticket_id', headerName: 'Ticket_Id', editable: true, width: 100 },
];

export default function OrderDataTable( {rows} ) {
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
        getRowId={(row) => row.payment_id}
      />
  );
}