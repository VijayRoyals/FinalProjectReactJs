// LoginPage.js

import React, { useState } from 'react';
import { TextField, Button, Container, MenuItem, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from './features/user/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import ParentAdmRouter from "../AdminConsole/ParentAdmRouter";

// const LoginPage = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [userType, setUserType] = useState('student');
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const resultAction = await dispatch(loginUser({ username, password, userType }));
  //   if (loginUser.fulfilled.match(resultAction)) {
  //     navigate(`/dashboard/${userType}`);
  //   }
  // };


  const LoginPageComp = () => {
    // const nav = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [userType, setUserType] = React.useState('student');
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [error, setError] = React.useState('');

  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const data = new FormData(event.currentTarget);
  
    //   let enteredEmail = data.get('email');
    //   let enteredPassword = data.get('password');
  
    //   // Check if the entered credentials match the admin credentials
    //   // if (enteredEmail === 'suresh@gmail.com' && enteredPassword === 'suresh@123') {
    //   //   nav("/Maindashboard");
    //   //   sessionStorage.setItem("user", enteredEmail);
    //   } 
    //   // else {
    //   //   setError("Wrong UserId or Password");
    //   //   nav("/ProductUser");
    //   // }
    // };

    
const [userType, setUserType] = useState('');
const navigate = useNavigate();

const handleUserTypeChange = (event) => {
  setUserType(event.target.value);
};

const handleLogin = () => {
  switch (userType) {
    case 'student':
      navigate('/stdcrud');
      break;
    case 'trainer':
      navigate('/trainercrud');
      break;
    case 'admin':
      navigate('/admincrud');
      break;
    default:
      alert('Please select a user type');
  }
};



  return (
    <Container maxWidth="sm">
      <Box mt={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 360 }}>

          {/* <form onSubmit={handleSubmit}>  */}
          {/* <form onSubmit={ParentAdmRouter}>  */}
          <form > 
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
            />



            {/* <TextField
              label="User Type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              select
              fullWidth
              margin="normal"
              variant="outlined"
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="trainer">Trainer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField> */}
            {/* <Button type="submit"  variant="contained" color="primary" fullWidth>
              Login
            </Button>     this is original button  */ }  


              <TextField
                      select
                      label="User Type"
                      value={userType}
                      onChange={handleUserTypeChange}
                      fullWidth
                      margin="normal"
                    >
                      <MenuItem value="student">Student</MenuItem>
                      <MenuItem value="trainer">Trainer</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </TextField>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleLogin}
                    >
                      Login
                    </Button>

          </form>

          <Box mt={2}>
            <Button component={Link} to="/RegistrationPage" variant="text" fullWidth>
              New User? Register Here
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPageComp;


