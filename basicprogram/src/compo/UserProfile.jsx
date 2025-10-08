/*
import { TableContainer, TableHead } from '@mui/material'
import React from 'react'

const UserProfile = () => {
  return (
    <div>UserProfile</div>
    <TableContainer>
        
    </TableContainer>
  )
}

export default UserProfile

*/

import React from 'react';
import {  TableContainer,  Table,  TableHead,  TableBody,  TableRow,  TableCell} from '@mui/material';

const UserProfile = () => {
  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Vivek Kumar</TableCell>
            <TableCell>2400030562@gmail.com</TableCell>
          </TableRow>
          <TableRow>
           
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserProfile;

