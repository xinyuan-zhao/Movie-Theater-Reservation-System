import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'movie_id', headerName: 'Movie_Id', width: 100 },
  { field: 'title', headerName: 'Title', editable: true, width: 500 },
  { field: 'director', headerName: 'Director', editable: true, width: 300 },
  { field: 'release_date', headerName: 'Release_Date', editable: true, width: 300 },
  { field: 'duration', headerName: 'Duration', editable: true, width: 100 },
];

export default function DataTable( {rows} ) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        checkboxSelection
        getRowId={(row) => row.movie_id}
      />
    </div>
  );
}