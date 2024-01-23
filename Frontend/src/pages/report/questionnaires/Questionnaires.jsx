import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import axios from "axios";

const columns = [
    { id: "id", label: "Id" },
    { id: "userId", label: "User Id", minWidth: 100 },
    { id: "questionId", label: "Question Id", minWidth: 100 },
    { id: "answer", label: "Answer", minWidth: 100 },
    { id: "dateTime", label: "Date Time", minWidth: 100 },


];

export default function Questionnaires() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const getUserData = async () => {
        await axios
            .get("http://localhost:9999/api/form/get-questionnaires")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    useEffect(() => {
        getUserData();
    }, []);

    // console.log(users);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Filter users based on search query
    const filteredUsers = users.filter((user) =>
        Object.values(user).some(
            (value) =>
                typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <Paper sx={{ width: "1000px", overflow: "hidden", height: '500px' }}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <TableContainer sx={{ Height: 1000 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column, index) => {
                                        const value = user[column.id];
                                        return (
                                            <TableCell key={index} >
                                                {column.format && typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );

}