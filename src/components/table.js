/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
// eslint-disable-next-line linebreak-style
import TableBody from '@mui/material/TableBody';
// eslint-disable-next-line linebreak-style
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { LocalLaundryServiceOutlined } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import { useEffect } from 'react';
import axios from 'axios';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Button, TextField } from '@mui/material';

import Container from '@mui/material/Container';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';

/* function createData(id,name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const row = [
  createData(1,'Cupcake', 305, 3.7, 67, 4.3),
  createData(2,'Donut', 452, 25.0, 51, 4.9),
  createData(3,'Eclair', 262, 16.0, 24, 6.0),
  createData(4,'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6,'Honeycomb', 408, 3.2, 87, 6.5),
  createData(7,'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(8,'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(9,'KitKat', 518, 26.0, 65, 7.0),
  createData(10,'Lollipop', 392, 0.2, 98, 0.0),
  createData(11,'Marshmallow', 318, 0, 81, 2.0),
  createData(12,'Nougat', 360, 19.0, 9, 37.0),
  createData(13,'Oreo', 437, 18.0, 63, 4.0),
];
*/
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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'email',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'role',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'action',
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const {
    numSelected,
    selected,
    rows,
    setRows,
    setSelected,
    selectall,
    setSelectall,
    page,
    setData1,
    data1,
  } = props;

  const d = () => {
    const newrows = rows.filter((ele) => !selectall.includes(ele.id));
    // console.log("selectall", newrows);
    setRows(newrows);
    const newrows1 = data1.filter((ele) => !selectall.includes(ele.id));
    setData1(newrows1);
    setSelected([]);
    setSelectall([]);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{
            width: '50%',
            bgcolor: (theme) => alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
          }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          { selectall.length > 0 ? (
            <>
              {selectall.length}
              {' '}
              selected from page
              {' '}
              {page}
            </>
          ) : (
            <>
              {numSelected}
              {' '}
              selected
              {' '}
            </>
          )}

        </Typography>
      ) : (
        <Typography
          sx={{ width: '50%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          no row select
        </Typography>
      )}

      {numSelected > 0 ? (
        <Button
          sx={{ marginLeft: 'auto', borderColor: 'red', color: 'red' }}
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => {
            d();
          }}
        >
          Delete All
        </Button>
      ) : (
        <Button
          disabled
          sx={{ marginLeft: 'auto' }}
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => {
            d();
          }}
        >
          Delete All
        </Button>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
  const {
    rows, setRows, data1, setData1, setId,
  } = props;

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedrows, setSelectedrows] = React.useState([]);
  const [selectall, setSelectall] = React.useState([]);
  const [searchtext, setSearchtext] = React.useState('');

  // console.log("selectall", selectall);

  //====== search filter start =========
  const handlechange = (item) => {
    setSearchtext(item);
    filterData(item);
  };

  const filterData = (l) => {
    const lowercaseValue = l.toLowerCase().trim();
    if (!lowercaseValue) {
      setRows(data1);
    } else {
      const filteredData = data1.filter((item) => Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(lowercaseValue)));
      setRows(filteredData);
    }
  };
  //====== search filter End =========

  //====== sort column  start ========
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  //====== sort column end ========



  //====== select rows start ========
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const min = page * rowsPerPage;  // min is first row index of current page
      const max = (page + 1) * rowsPerPage;  // max is first row index of current page
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);

      const newrow = newSelecteds.filter((n, l) => {
        if (l >= min && l < max) {
          return n;
        }
      });
      setSelectall(newrow);
      return;
    }
    setSelected([]);
    setSelectall([]);
  };

    //====== select rows end ========

    //======== delete single iteam start ==========
  let ll = []; // store deleted item
  const delete_item = (id) => {
    ll = rows.filter((val) => val.id == id);
    const newrows = rows.filter((val) => val.id != id);
    setRows(newrows);
  };

  //======== delete single iteam end ==========


  //======== select single row start =========
  const handleClick = (event, name, id) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    if (ll.length > 0) {
      setSelected([]);
      setSelectedrows([]);
      setSelectall(newSelected);
    } else {
      setSelected(newSelected);
      setSelectall([]);
    }
  };

  //======== select single row end =========

  //======== page start ========
  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    const min = newPage * rowsPerPage;
    const max = (newPage + 1) * rowsPerPage;

    const newrow = selected.filter((n, l) => {
      // n.name
      if (l >= min && l < max) {
        // console.log("l ", l);
        return n;
      }
    });

    setSelectall(newrow);
  };
  //======== page end ========

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box sx={{ width: '100%', paddingTop: '20px' }}>
        <TextField
          variant="outlined"
          label="search...."
          value={searchtext}
          onChange={(e) => handlechange(e.target.value)}
          sx={{ width: '100%' }}
        />
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            selected={selected}
            rows={rows}
            setRows={setRows}
            setSelected={setSelected}
            selectall={selectall}
            setSelectall={setSelectall}
            page={page}
            setData1={setData1}
            data1={data1}
          />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="secondary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.role}</TableCell>
                        <TableCell align="left">
                          <Link to="/edit">
                            <IconButton
                              onClick={() => {
                                setId(row.id);
                              }}
                            >
                              <EditTwoToneIcon size="small" />
                            </IconButton>
                          </Link>
                          <IconButton
                            onClick={() => {
                              delete_item(row.id);
                            }}
                          >
                            <DeleteOutlineRoundedIcon sx={{ color: 'red' }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            backIconButtonProps={{
              color: 'secondary',
            }}
            nextIconButtonProps={{ color: 'secondary' }}
            SelectProps={{
              inputProps: {
                'aria-label': 'page number',
              },
            }}
            showFirstButton
            showLastButton
          />
        </Paper>
      </Box>
    </Container>
  );
}
