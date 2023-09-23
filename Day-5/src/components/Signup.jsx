import * as React from 'react';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Signup.css';


const Signup = () => {
  
  const navigate = useNavigate() ;

  const [formdata, setFormdata] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormdata({
        ...formdata,
        [name]: value,
      });
    } catch (error) {
      console.error('Error in handleOnChange:', error);
    }
  };

  const submitForm = (e) => {
    //e.preventDefault();
    console.log(formdata);
    navigate("/") ;
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor : 'rgb(49, 49, 48)'}}>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'serif' ,
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'rgb(234, 94, 34)',
              textDecoration: 'none',
            }}
          >
            PerfumePalette
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <div className='login-container'>
      <form action="" onSubmit={submitForm} className='login-form'>
        
        <div className='header'><h1>Signup</h1></div>
      <div className="pad2">
          <TextField
            id="filled-basic"
            label="first name"
            variant="filled"
            name="firstname"
            value={formdata.firstname}
            onChange={handleOnChange}
            required
            fullWidth
          />
        </div>

        <div className="pad2">
          <TextField
            id="filled-basic"
            label="last Name"
            variant="filled"
            name="lastname"
            value={formdata.lastname}
            onChange={handleOnChange}
            required
            fullWidth
          />
        </div>

        <div className="pad2">
          <TextField
            id="filled-basic"
            label="email"
            variant="filled"
            name="email"
            value={formdata.email}
            onChange={handleOnChange}
            required
            fullWidth
          />
        </div>

        <div className="pad2">
          <TextField id="filled-basic" name='password' label="password" variant="filled" type="password"
            value={formdata.password} onChange={handleOnChange} required fullWidth />
        </div>

        <div className="pad2">
          <TextField id="filled-basic" name='confirmPassword' label="confirm password" variant="filled" type="password"
            value={formdata.confirmPassword} onChange={handleOnChange} required fullWidth/>
        </div>
        <div className='but2'>
          <Fab variant="extended" style={{ backgroundColor: 'rgb(49, 49, 48)' , color: 'white' }} type='submit'>
            Sign up
          </Fab>
        </div>
        <div className='padd1'>
          Already have an account? <span className='log' onClick={() => window.location.href = '/'}>Log in</span>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
