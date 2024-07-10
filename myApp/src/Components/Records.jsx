import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name,Dept,Semester) {
  return {Name,Dept,Semester};
}

const rows = [
  {Name:'Aparna',Dept:'CSAI',Semester:'S4'},
  {Name:'Anu',Dept:'CS',Semester:'S6'}
];

const Records = ()=> {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Department</TableCell>
          <TableCell align="right">Semester</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.Name}
            </TableCell>
            <TableCell align="right">{row.Dept}</TableCell>
            <TableCell align="right">{row.Semester}</TableCell>
        
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
   
  );
}

export default Records