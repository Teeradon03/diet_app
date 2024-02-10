import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import axios from "axios";

const Questionnaires = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const getQuestionnaires = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_API}/api/form/get-questionnaires`
      );
      const data = response.data;
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestionnaires();
  }, []);

  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setFilter(keyword);
    const filtered = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === "asc";
    setOrderBy(column);
    setOrder(isAsc ? "desc" : "asc");
    const sortedData = filteredData.slice().sort((a, b) => {
      if (isAsc) {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setFilteredData(sortedData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Questionnaires
      </Typography>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
        value={filter}
        onChange={handleSearchChange}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "questionId"}
                direction={orderBy === "questionId" ? order : "asc"}
                onClick={() => handleSort("questionId")}
              >
                Question ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "userId"}
                direction={orderBy === "userId" ? order : "asc"}
                onClick={() => handleSort("userId")}
              >
                User ID
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "dateTime"}
                direction={orderBy === "dateTime" ? order : "asc"}
                onClick={() => handleSort("dateTime")}
              >
                Date Time
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "answer"}
                direction={orderBy === "answer" ? order : "asc"}
                onClick={() => handleSort("answer")}
              >
                Answer
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.questionId}</TableCell>
                <TableCell>{item.userId}</TableCell>
                <TableCell>{item.dateTime}</TableCell>
                <TableCell>{item.answer.join(", ")}</TableCell>
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

export default Questionnaires;
