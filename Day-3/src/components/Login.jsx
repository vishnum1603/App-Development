import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom' ;
import '../assets/css/Login.css';

const Login = () => {
  const [formdata, setFormdata] = React.useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = React.useState(false);

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
    console.log(formdata);
  };

  return (
    <div className='login-container1'>
      <form action="" onSubmit={submitForm} className='login-form1'>
      <div className='header1'><h1>Login</h1></div>
        <div className="pad1">
          <div />
          <TextField
            id="filled-basic"
            label="username"
            variant="filled"
            name="username"
            value={formdata.username}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="pad1">
          <TextField id="filled-basic" name='password' label="password" variant="filled" type={showPassword ? 'text' : 'password'}
            value={formdata.password} onChange={handleOnChange} required />
        </div>
        <div className="password-toggle">
          <FormControlLabel
            control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />}
            label="Show password"
          />
        </div>
        <div className="but1">
        <Fab variant="extended" color='primary' type="submit" className="custom-fab-button">
         Signup
         </Fab>   
          <span className='forgot1'>forgot password</span>
        </div>
        <div className='padd'>
         Don't have an account?{'  '}
        <span className='sign' onClick={() => window.location.href = '/'}>Sign up</span>
      </div>
      </form>
    </div>
  );
};

export default Login;
