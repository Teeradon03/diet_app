
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'content', headerName: 'Question', width: 300 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];


export default function DataTable() {
    const [rows, setRows] = useState([])

    const getQuestionData = async () => {
        try {
            const response = await axios.get('http://localhost:9999/api/form/get-questions')
            console.log('response', response.data)
            setRows(response.data)

        }
        catch (error) {
            console.log('Error Fetching data from api', error.message)
        }
    }

    useEffect(() => {
        getQuestionData()
    }, [])

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,25]}
        checkboxSelection
      />
    </div>
  );
}
