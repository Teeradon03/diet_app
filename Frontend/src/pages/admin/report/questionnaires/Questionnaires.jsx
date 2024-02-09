import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography"
import axios from "axios";

const Questionnaires = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");

  const getQeustionnaires = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/form/get-questionnaires`)
      const data = response.data
      setData(data);
      setFilteredData(data);
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getQeustionnaires()

  }, []);

  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setFilter(keyword);
    const filtered = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filtered);
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
            <TableCell>Question ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Date Time</TableCell>
            <TableCell>Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.questionId}</TableCell>
              <TableCell>{item.userId}</TableCell>
              <TableCell>{item.dateTime}</TableCell>
              <TableCell>{item.answer.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Questionnaires;
