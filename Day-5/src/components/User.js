import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../assets/css/User.css' ;

const User = () => {
  const initialUsers = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password1' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', password: 'password2' },
    { id: 3, firstName: 'July', lastName: 'Smith', email: 'jane@example.com', password: 'password3' },
    // Add more users as needed
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (userId) => {
    // Filter out the user with the given userId
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'rgb(49, 49, 48)' }}>
          <Toolbar>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'serif',
                fontWeight: 1000,
                letterSpacing: '.3rem',
                color: 'rgb(234, 94, 34)',
                textDecoration: 'none',
              }}
            >
              PerfumePalette
            </Typography>
            <Button color="inherit" sx={{ml:'auto' , color: 'pink'}}>
            Add
        </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <TableContainer component={Paper} sx={{ overflow: 'hidden' }} className="fade-in">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize:'20px' , fontFamily:"fantasy"}}>First Name</TableCell>
                <TableCell sx={{fontSize:'20px' , fontFamily:"fantasy"}}>Last Name</TableCell>
                <TableCell sx={{fontSize:'20px' , fontFamily:"fantasy"}}>Email</TableCell>
                <TableCell sx={{fontSize:'20px' , fontFamily:"fantasy"}}>Password</TableCell>
                <TableCell sx={{fontSize:'20px' , fontFamily:"fantasy"}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                  <TableRow>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.password}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </Button>
                      <Button variant="contained" color="secondary" style={{ marginLeft: '8px' }}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default User;

