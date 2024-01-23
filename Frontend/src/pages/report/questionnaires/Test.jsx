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
    { id: "id", label: "Id", minWidth: 100 },
    { id: "userId", label: "User Id", minWidth: 100 },
    { id: "questionId", label: "Question Id", minWidth: 100 },
    { id: "answer", label: "Answer", minWidth: 100 },
    { id: "dateTime", label: "Date Time", minWidth: 100 },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export default function Questionnaires() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setSelected] = useState([]); // เพิ่มตัวแปรเก็บรายการที่เลือก

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

    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("id");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = filteredUsers.map((user) => user.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    
    const isSelected = (id) => selected.indexOf(id) !== -1;

    const EnhancedTableHead = (props) => {
        const { order, orderBy, onRequestSort } = props;

        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };

    const EnhancedTableHead = (props) => {
        const { order, orderBy, onRequestSort } = props;

        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };

        const EnhancedTableToolbar = (props) => {
            const { numSelected } = props;
        
            return (
                <Toolbar>
                    {numSelected > 0 ? (
                        <Typography
                            sx={{ flex: "1 1 100%" }}
                            color="inherit"
                            variant="subtitle1"
                            component="div"
                        >
                            {numSelected} selected
                        </Typography>
                    ) : (
                        <Typography
                            sx={{ flex: "1 1 100%" }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Nutrition
                        </Typography>
                    )}
        
                    {numSelected > 0 ? (
                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Filter list">
                            <IconButton>
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                </Toolbar>
            );
        };
        

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
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <EnhancedTableToolbar numSelected={selected.length} />
                        <TableHead>
                            <TableRow>
                            <TableCell>
                        <Checkbox
                            indeterminate={selected.length > 0 && selected.length < filteredUsers.length}
                            checked={selected.length === filteredUsers.length}
                            onChange={handleSelectAllClick}
                        />
                    </TableCell>
                                {columns.map((column) => (
                                    <TableCell
                            key={column.id}
                            align="left"
                            style={{ minWidth: column.minWidth }}
                        >
                            <TableSortLabel
                                active={orderBy === column.id}
                                direction={orderBy === column.id ? order : "asc"}
                                onClick={createSortHandler(column.id)}
                            >
                                {column.label}
                            </TableSortLabel>
                        </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stableSort(filteredUsers, getComparator("asc", "id"))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((user, index) => (
                                    <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={index}
                                    selected={isSelected(user.id)}
                                >
                                    <TableCell>
                                        <Checkbox
                                            checked={isSelected(user.id)}
                                            onChange={(event) => handleClick(event, user.id)}
                                        />
                                    </TableCell>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align="left">
                                            {user[column.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        );
    }
}
}