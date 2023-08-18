import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, CssBaseline, Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Search } from '@mui/icons-material';

const Header = () => {
  const rowsPerPage = 5;
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const rows = [
    { name: 'PO#1', Supplier: "James Samith", OrderDate: "5/15/23", Status: "Arrived", Value: 778.35 },
    { name: 'PO#2', Supplier: "Alex Christopher", OrderDate: "5/11/23", Status: "Shipped", Value: 778.35 },
    { name: 'PO#3', Supplier: "Chris Jordan", OrderDate: "5/15/23", Status: "Delivered", Value: 778.35 },
    { name: 'PO#4', Supplier: "David Wood", OrderDate: "5/15/23", Status: "Shipped", Value: 778.35 },
    { name: 'PO#5', Supplier: "George Joseph", OrderDate: "5/15/23", Status: "In Transit", Value: 778.35 },
    { name: 'PO#6', Supplier: "William", OrderDate: "5/15/23", Status: "Arrived", Value: 778.35 },
    // Add more rows here...
  ];

  return (
    <Container>
      <CssBaseline />
      <Box className='main_purchase'>
        <Box className='Purchase'>
          <Typography variant="h2" component="h2" className='head' >
            Purchase Order
          </Typography>
        </Box>
        <Box className=' head_btn'>
          <Button variant="contained" > Create New Order</Button>
          <Button variant="outlined"  >Manage Suppliers </Button>
        </Box>
      </Box>
      
      <Box className='search'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            slotProps={{
              textField: {
                InputProps: { 
                  startAdornment: <Search />,
                  placeholder: 'Search...', 
                },
              },
            }}
          />
        </LocalizationProvider>
      </Box>

      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PO#</TableCell>
              <TableCell align="right">Supplier</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.Supplier}</TableCell>
                <TableCell align="right">{row.OrderDate}</TableCell>
                <TableCell align="right">{row.Status}</TableCell>
                <TableCell align="right">{row.Value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
    </Container>
  );
}

export default Header;
