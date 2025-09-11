'use client'
import { Alert, Box, Button, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { alert } from "./components/Alert/Alert";

const style: any = {
  position: 'absolute' as 'absolute',
  top: '35%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '1px solid gainsboro',
  boxShadow: '0 0 3px',
  borderRadius: '10px 10px 10px 10px',
  height: 300,
  p: 1
};

const Home = () => {
  const router = useRouter();
  const defaultLogin: any = {
    username: '',
    password: '',
  };
  const [login, setLogin] = useState(defaultLogin);
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    handleLoginChange({ [name]: value });
  };

  const handleLoginChange = (data: any) => {
    setLogin((prevState: any) => {
      return { ...prevState, ...data };
    });
  };

  const handleSubmit = async () => {
    if (login.username === 'admin' && login.password === 'admin@123') {
      alert.showSuccessMsg('Admin login successful');
      router.push('/admin/home');
    } else if (login.username === 'customer' && login.password === 'customer@123') {
      alert.showSuccessMsg('Customer login successful');
      router.push('/customer/home');
    } else if (login.username === 'icms' && login.password === 'icms@123') {
      alert.showSuccessMsg('ICMS login successful');
      router.push('/icms');
    } else {
      alert.showErrorMsg('Invalid username or password');
    }
  };



  return (
    <SnackbarProvider maxSnack={3}>
      <Box sx={style}>
        <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>Log-in</Box>
        <Grid
          container
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            minHeight: '60%',
          }}
        >
          <Grid>
            <TextField
              size="small"
              name="username"
              value={login.username}
              onChange={handleInputChange}
              label="User Name"
            />
          </Grid>
          <Grid>
            <TextField
              size="small"
              name="password"
              type="password"
              value={login.password}
              onChange={handleInputChange}
              label="Password"
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          <Button size="small" variant="contained" onClick={handleSubmit}>
            {login.username === '' ? 'Login' : login.username === 'admin' ? 'Admin Login' : 'Client Login'}
          </Button>
        </Box>
      </Box>
    </SnackbarProvider>
  );
};

export default Home;



