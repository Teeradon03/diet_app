import React, { useState, useEffect } from "react";
import {
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@mui/material";
import axios from "axios";

const Question = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");

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
            <TableCell>ID</TableCell>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Question;
