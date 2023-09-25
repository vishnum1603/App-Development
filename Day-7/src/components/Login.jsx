import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { login } from './redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../assets/css/Login.css';
import Header from './Header';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const [formdata, setFormdata] = React.useState({
    username: '',
    password: '',
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

    if (formdata.username === 'admin' && formdata.password === 'adminpassword') {
      dispatch(login(formdata.username));
      navigate('/dashboard');
    } else {
      navigate('/home');
    }
  };

  return (
    <>
      <Header />
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
              control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} color='default' />}
              label="Show password"
            />
          </div>
          <div className="but1">
            <Fab variant="extended" style={{ backgroundColor: 'rgb(49, 49, 48)', color: 'white' }} type="submit" className="custom-fab-button">
              Sign in
            </Fab>
            <span className='forgot1'>forgot password</span>
          </div>
          <div className='padd'>
            Don't have an account?{'  '}
            <span className='sign' onClick={() => window.location.href = '/signup'}>Sign up</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
