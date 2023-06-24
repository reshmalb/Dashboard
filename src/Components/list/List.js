import React from 'react'
import './List.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const rows = [
            {
                id:1212121,
                product:"Food Crusher",
                img:" ",
                customer:"Martin",
                date:"23th september",
                amount:300,
                method:"cash on delivery",
                status:"approved"
            },
            {
                id:12121881,
                product:"Food Crusher",
                img:" ",
                customer:"Martin",
                date:"23th september",
                amount:300,
                method:"cash on delivery",
                status:"approved"
            },
            {
                id:1212144,
                product:"Food Crusher",
                img:" ",
                customer:"Martin",
                date:"23th september",
                amount:300,
                method:"cash on delivery",
                status:"approved"
            },
            {
                id:1212124,
                product:"Food Crusher",
                img:" ",
                customer:"Martin",
                date:"23th september",
                amount:300,
                method:"cash on delivery",
                status:"approved"
            },
            {
                id:1212165,
                product:"Food Crusher",
                img:" ",
                customer:"Martin",
                date:"23th september",
                amount:300,
                method:"cash on delivery",
                status:"approved"
            },
            {
                id:1212125,
                product:"Food Crusher",
                img:" ",
                customer:"Martin",
                date:"23th september",
                amount:300,
                method:"cash on delivery",
                status:"pending"
            },
  ];


const List = () => {

   const isApproved=true;


  return (
    <div className='list'>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell' > Tracking ID</TableCell>
          <TableCell className='tableCell' >Product</TableCell>

          <TableCell className='tableCell' >Customer</TableCell>
          <TableCell className='tableCell' >Date</TableCell>
          <TableCell className='tableCell' >Amount</TableCell>
          <TableCell className='tableCell' >Payment Method</TableCell>
          <TableCell className='tableCell' >Status</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tableCell' >
              {row.id}
            </TableCell>
            <div className='cellWrapper'>
            <TableCell className='tableCell'>        
                
                    <img  className='image' src={row.img} alt=""/>
                    {row.product} 
                                        </TableCell>
                   </div>

            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell  className='tableCell'>{row.method}</TableCell>
            <TableCell className='tableCell'>
                <span className={`rowStatus ${row.status}`}>{row.status}</span>
               </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default List
