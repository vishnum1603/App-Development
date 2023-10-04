import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { login } from './redux/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SigninForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formdata, setFormdata] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formdata.username.trim() === '') {
            setFormErrors({ ...formErrors, username: 'Username is required' });
            return;
        }

        if (formdata.password.trim() === '') {
            setFormErrors({ ...formErrors, password: 'Password is required' });
            return;
        }

        setFormErrors({ username: '', password: '' });

        if (formdata.username === 'admin' && formdata.password === 'adminpassword') {
            console.log('Form data submitted:', formdata);
            dispatch(login(formdata.username));
            toast.success('Welcome, Admin!', {
                position: 'top-center',
                autoClose: 2000,
                onClose: () => {
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 3000);
                }
            });
        } else {
            console.log('Form data submitted:', formdata);
            toast.success('Signin successful!', {
                position: 'top-center',
                autoClose: 2000,
                onClose: () => {
                    setTimeout(() => {
                        navigate('/home');
                    }, 3000);
                }
            });
        }
    };

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
    return (
        <div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={formdata.username}
                    onChange={handleOnChange}
                    autoComplete='username'
                    autoFocus
                    helperText={formErrors.username}
                    error={!!formErrors.username}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    id="password"
                    value={formdata.password}
                    label="Password"
                    autoComplete='password'
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleOnChange}
                    required
                    helperText={formErrors.password}
                    error={!!formErrors.password}
                    sx={{ mr: 1 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
            </Box>
        </div>
    )
}