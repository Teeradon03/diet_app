import React, { useState, useEffect } from "react";
import {
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TablePagination,
  TableSortLabel
} from "@mui/material";
import axios from "axios";

const Question = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page
  const [page, setPage] = useState(0); // Current page number
  const [orderBy, setOrderBy] = useState('id');
  const [order, setOrder] = useState('asc');

  const getQuestionData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_API}/api/form/get-questions`
      );

      const data = response.data;
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  useEffect(() => {
    // Filter data based on the search filter
    const filtered = data.filter((item) => item.content.includes(filter));
    setFilteredData(filtered);
  }, [data, filter]);

  // Handle sorting
  const handleSort = (column) => {
    console.log('columns in sort id ', column)
    const isAsc = orderBy === column && order === 'asc';
    setOrderBy(column);
    setOrder(isAsc ? 'desc' : 'asc');
    const sortedData = filteredData.slice().sort((a, b) => {
      if (isAsc) {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setFilteredData(sortedData);
  };

  // Handle changing page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle changing rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Questions
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={() => handleSort('id')}
              >
                ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'content'}
                direction={orderBy === 'content' ? order : 'asc'}
                onClick={() => handleSort('content')}
              >
                Content
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.content}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Question;
