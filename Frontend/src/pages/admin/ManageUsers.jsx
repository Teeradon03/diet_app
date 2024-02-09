import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { changeRole } from "../../functions/auth";

export default function ManageUsers() {
  const [rows, setRows] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState({});

  const roleOptions = ['admin', 'user'];

  function createData(userId, line_username, role, updatedAt) {
    return { userId, line_username, role, updatedAt };
  }

  const getUserForManages = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_API}/api/user/get-users`
      );
      const users = response.data;
      // console.log("user", users);
      const initialSelectedRoles = {};
      const mappedRows = users.map((user) => {
        // console.log(user.userId);
        initialSelectedRoles[user.userId] = user.role;
        return createData(
          user.userId,
          user.line_username,
          user.role,
          user.updatedAt
        );
      });

      // console.log('init', initialSelectedRoles)

      setSelectedRoles(initialSelectedRoles);
      setRows(mappedRows);
      // console.log('rows', rows)
    } catch (error) {
      // console.log("error", error.message);
    }
  };

  useEffect(() => {
    getUserForManages();
  }, []);

  const handleRoleChange = async (userId, event) => {
    try {
      const updatedRoles = { ...selectedRoles, [userId]: event.target.value };
      setSelectedRoles(updatedRoles);

      const response = await changeRole(userId, updatedRoles)

    // console.log('response ', response)

      if (response.status === 200) {
        alert('Change Role Successfully.')
      }
      else{
        alert('Change Role Failed')
      }

    }
    catch (error) {
      // console.log(error)
    }


  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userId </TableCell>
            <TableCell align="right">line_username</TableCell>
            <TableCell align="right">role</TableCell>
            <TableCell align="right">updatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="right">{row.line_username}</TableCell>
              <TableCell align="right">
                <Select
                  value={selectedRoles[row.userId] || ""}
                  onChange={(event) => handleRoleChange(row.userId, event)}
                >
                  {roleOptions.map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>  
              </TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
