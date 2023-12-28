import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IconButton from '@mui/material/IconButton/IconButton';
import { employees } from '@/mocks/employees';
import Link from 'next/link';

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="uppercase">
            <TableCell className="font-bold text-xs">Name</TableCell>
            <TableCell align="right" className="font-bold text-xs">
              Position
            </TableCell>
            <TableCell align="right" className="font-bold text-xs"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.name}
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {employee.position}
              </TableCell>

              <TableCell align="right">
                <IconButton
                  aria-label="details"
                  color="primary"
                  LinkComponent={Link}
                  href={`/admin/dashboard/employees/${employee.id}`}
                >
                  <ArrowCircleRightIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
