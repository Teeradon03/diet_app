import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Users = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');

  const getUserData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/user/get-users`)
      const data = response.data
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUserData()
  }, []);

  useEffect(() => {
    // Filter data based on the search filter
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        typeof val === 'string' && val.toLowerCase().includes(filter.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [data, filter]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Users Data
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Table component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Line User Id</TableCell>
              <TableCell>Line Username</TableCell>
              <TableCell>Line Picture URL</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Target Weight</TableCell>
              <TableCell>BMI</TableCell>
              <TableCell>BMR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.userId}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.dateOfBirth}</TableCell>
                <TableCell>{item.line_user_id}</TableCell>
                <TableCell>{item.line_username}</TableCell>
                <TableCell>{item.line_picture_url}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>{item.height}</TableCell>
                <TableCell>{item.targetWeight}</TableCell>
                <TableCell>{item.bmi}</TableCell>
                <TableCell>{item.bmr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
