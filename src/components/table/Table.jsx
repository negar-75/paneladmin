import React from 'react'
import "./table.scss"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#AECD8E',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F6FEEB',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function List() {

   

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Haroldd Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];


     



 
  return (
    
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <StyledTableRow>
            <StyledTableCell className="StyledTableCell">Tracking ID</StyledTableCell>
            <StyledTableCell className="StyledTableCell">Product</StyledTableCell>
            <StyledTableCell className="StyledTableCell">Customer</StyledTableCell>
            <StyledTableCell className="StyledTableCell">Date</StyledTableCell>
            <StyledTableCell className="StyledTableCell">Amount</StyledTableCell>
            <StyledTableCell className="StyledTableCell">Payment Method</StyledTableCell>
            <StyledTableCell className="StyledTableCell">Status</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow
            key={row.id}>
           
            <StyledTableCell className="StyledTableCell">{row.id}</StyledTableCell>
              <StyledTableCell className="StyledTableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" 
                  style={{width:"50px",
                         height:"50px"}}/>
                  {row.product}
                </div>
              </StyledTableCell>
            <StyledTableCell className="StyledTableCell">{row.customer}</StyledTableCell>
              <StyledTableCell className="StyledTableCell">{row.date}</StyledTableCell>
              <StyledTableCell className="StyledTableCell">{row.amount}</StyledTableCell>
              <StyledTableCell className="StyledTableCell">{row.method}</StyledTableCell>
              <StyledTableCell className="StyledTableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List