import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField,Typography } from '@mui/material';

const Users = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch data from API or set the data directly
    const mockData = [{"_id":"65b897096d6a9274e0f2a2b6","role":"admin","userId":"valrzz9aq3","line_user_id":"U7833a2ae97c2d003aea1d4553ce7f3f7","line_username":"Teeradon","line_picture_url":"https://profile.line-scdn.net/0hocO_OGQFMExyJhrrW-JPG05jPiEFCDYECkAveFAgOXoLRXIaTEkvKFUlaytfESccTxd2fVIvaHsM","createdAt":"2024-01-30T06:28:25.615Z","updatedAt":"2024-01-30T06:28:25.615Z","__v":0,"age":123,"firstName":"asd","gender":"ชาย","lastName":"asd","dateOfBirth":"2024-02-05T17:00:00.000Z","weight":44,"height":145,"targetWeight":45,"bmi":22.634676324128566,"bmr":1159.25},{"_id":"65bca6f5217b19037805b1e7","role":"user","userId":"2ools4drbbl","line_user_id":"Udf585516dd52c927a443dd0991d13b13","line_username":"Kittikun Bunmala","line_picture_url":"https://profile.line-scdn.net/0hZirNT4KPBUZPNxfEjD16EXNyCys4GQMONwEaIj9jXnEyUxdFellLdGswDHZjUkMYdwVOcj9lUyFg","createdAt":"2024-02-02T08:25:25.527Z","updatedAt":"2024-02-02T08:25:25.527Z","__v":0}];
    setData(mockData);
    setFilteredData(mockData);
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date of Birth</TableCell>
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
              <TableCell>{index +1 }</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.userId}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.dateOfBirth}</TableCell>
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
  );
};

export default Users;
