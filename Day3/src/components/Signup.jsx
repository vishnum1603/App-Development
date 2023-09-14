import * as React from 'react';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import '../assets/css/Signup.css';

const Signup = () => {
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
    e.preventDefault();
    if (formdata.password !== formdata.confirmPassword) {
      return;
    }
    console.log(formdata);
  };

  return (
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
          <Fab variant="extended" type='submit' color='primary'>
            Signup
          </Fab>
        </div>
        <div className='padd1'>
          Already have an account? <span className='log' onClick={() => window.location.href = '/login'}>Log in</span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
