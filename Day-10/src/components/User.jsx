import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const User = () => {
  const initialUsers = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password1' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', password: 'password2' },
    { id: 3, firstName: 'July', lastName: 'Smith', email: 'july@example.com', password: 'password3' },
    { id: 4, firstName: 'Vishnu', lastName: 'M', email: 'vishnu@example.com', password: 'password4' },
    { id: 5, firstName: 'Rishi', lastName: 'Sundar', email: 'rishi@example.com', password: 'password5' },
    { id: 6, firstName: 'Shreethic', lastName: 'Suresh', email: 'shreethic@example.com', password: 'password6' },
    { id: 7, firstName: 'Saran', lastName: 'Kumar', email: 'saran@example.com', password: 'password7' },
    { id: 8, firstName: 'Sherwin', lastName: 'V', email: 'sherwin@example.com', password: 'password8' },
    { id: 9, firstName: 'Sam', lastName: 'Jayseelan', email: 'sam@example.com', password: 'password9' },
    { id: 10, firstName: 'Sai', lastName: 'Narendar', email: 'sai@example.com', password: 'password10' }, 
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const user = useSelector((state) => state.user);

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 220},
    { field: 'lastName', headerName: 'Last Name', width: 220 },
    { field: 'email', headerName: 'Email', width: 280 },
    { field: 'password', headerName: 'Password', width: 280 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div>
          <Button variant="contained" color="primary" onClick={() => handleDeleteUser(params.row.id)}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" style={{ marginLeft: '8px' }}>
            Edit
          </Button>
        </div>
      ),
    },
  ];

  const rows = users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  }));

  if (user.username) {
    rows.push({
      id: 'additional-row',
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      password: user.password,
    });
  }

  return (
    <div style={{ height: 550, width: '100%' , marginTop:0 , marginBottom:0}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
};

export default User;
